import css from './img/css.png'
import javascript from "./img/javascript.png"
import html from "./img/HTML.png"
import react from "./img/reactjs.png"
import mongodb from './img/mongo_db.png'
import java from './img/java.png'
import express from './img/express.png'
import node from './img/node_js.png'

export default function Exprience() {
  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md mt-20 text-center">
      <h1 className='text-4xl font-bold mb-5 text-gray-800'>Experience</h1>
      <p className="text-lg text-gray-600 mb-10 ">I`ve more than 2 years of experience in the following technologies:</p>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
        <img src={html} alt="HTML" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={css} alt="CSS" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={javascript} alt="JavaScript" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={mongodb} alt="MongoDB" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={express} alt="Express" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={react} alt="React" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={node} alt="Node.js" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
        <img src={java} alt="Java" className="w-32 h-32 rounded-full transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer" />
      </div>
    </div>
  )
}
