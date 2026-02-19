import { promises as fsp } from "fs";
import path from "path";

async function copyDir(src, dest) {
  try {
    await fsp.rm(dest, { recursive: true, force: true });
  } catch {}
  await fsp.mkdir(dest, { recursive: true });
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const e of entries) {
    const srcPath = path.join(src, e.name);
    const destPath = path.join(dest, e.name);
    if (e.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  const repoRoot = process.cwd();
  const frontendDist = path.join(repoRoot, "frontend", "dist");
  const vueDist = path.join(repoRoot, "frontend", "my-vue-app", "dist");
  const backendPublic = path.join(repoRoot, "backend", "public");

  // Copy primary frontend -> backend/public
  try {
    await copyDir(frontendDist, backendPublic);
    console.log("Copied frontend/dist -> backend/public");
  } catch (err) {
    console.warn("frontend/dist not found or copy failed:", err.message);
  }

  // If Vue app exists, put it into a subfolder backend/public/vue-app
  try {
    const dest = path.join(backendPublic, "vue-app");
    await copyDir(vueDist, dest);
    console.log("Copied my-vue-app/dist -> backend/public/vue-app");
  } catch (err) {
    console.warn("my-vue-app/dist not found or copy failed:", err.message);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});