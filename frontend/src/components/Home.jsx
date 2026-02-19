import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./About";
import Exprience from "./Exprience";
import Highlights from "./Highlights";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
       <Navbar/>
       <Banner/>
       <About/>
       <Exprience/>
       <Highlights/>
       <Contact/>
       <Footer/>
    </>
  )
}
