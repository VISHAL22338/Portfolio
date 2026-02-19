import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <>
         <div className='bg-white mb-20'>
        <div className='max-w-screen-2xl mx-auto container px-6 md:px-20 h-20'>
        <div className='flex flex-col md:flex-row'>
          
          {/* Text Section */}
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-1'>
            <span className='text-xl'>Welcome to My Portfolio Web Page</span>
            <div className='flex space-x-1 text-2xl md:text-4xl pt-5'>
              <h1>Hello, I am a</h1>
              <ReactTyped
                className='text-red-700 font-semibold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={50}
                backSpeed={50}
              />
            </div>
            <br />
            <p className=' space-y-2 p-2 md:text-md text-justify'>
            Welcome to my portfolio! I`m a B.Tech student with a strong passion for web development. This portfolio is a reflection of my skills and creativity, built using React and Tailwind CSS. I thrive on turning ideas into functional, visually appealing digital experiences. Take a look around to see my projects and learn more about my journey in the tech world!
            </p>
            <br />
            
            {/* Social and Skills Section */}
            <div className='flex items-center flex-col md:flex-row justify-between space-y-2 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold '>Available on</h1>
                <ul className='flex space-x-3'>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100052650670412" target='_blank'>
                    <FaFacebookSquare className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vishal-prajapati-39ab77257/" target='_blank'>
                    <FaLinkedin className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    </a>
                  </li>
                  <li><a href="https://twitter.com/" target='_blank'>
                    <FaTwitter className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    </a>
                  </li>
                  <li><a href="https://www.instagram.com/" target='_blank'>
                    <IoLogoInstagram className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working on</h1>
                <ul className='flex space-x-3'>
                  <li>
                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  </li>
                  <li>
                    <FaJsSquare className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  </li>
                  <li>
                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  </li>
                  <li>
                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
          {/* Image Section */}
          <div className='mt-20 md:w-1/2 md:ml-48 mt-32 md:order-1'>
            <img className='rounded-full md:w-[450px] h-[450px]' src="https://www.clipartmax.com/png/middle/5-54852_logo-computer-programming.png" alt="Programming Logo" />
          </div>
        </div>
      </div>
        </div>
    </>
  )
}
