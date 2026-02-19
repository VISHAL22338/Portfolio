
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer footer-center p-6 text-base-content dark:bg-slate-800 dark:text-white fixed bottom-0 left-0 w-full">
      <nav>
        <div className="grid grid-flow-col gap-4 justify-center">
          <a href="#" className="cursor-pointer">
            <FaTwitter size={24} className="fill-current" />
          </a>
          <a href="https://www.linkedin.com/in/vishal-prajapati-39ab77257/" target='_blank' className="cursor-pointer">
            <FaLinkedin size={24} className="fill-current" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100052650670412" target="_blank" className="cursor-pointer">
            <FaFacebook size={24} className="fill-current" />
          </a>
        </div>
      </nav>
      <aside className="text-center mt-2">
        <p>Copyright © {new Date().getFullYear()} </p>
      </aside>
    </footer>
  );
}

export default Footer;
