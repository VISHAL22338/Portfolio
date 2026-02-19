import { useState } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const navitems = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 4, name: 'Exprience' },
        { id: 5, name: 'Highlights' },
        { id: 6, name: 'Contact' }

    ];

    return (
        <>
            <div className='fixed top-0 w-full bg-white z-50 shadow-md'>
                <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 h-20 shadow-md'>
                    <div className='flex justify-between items-center h-20'>
                        <div className='flex space-x-2'>
                            <img
                                className='h-12 w-12 rounded-full'
                                src='https://w7.pngwing.com/pngs/114/10/png-transparent-computer-icons-graphic-design-portfolio-portfolio-web-design-text-photography.png'
                                alt='Profile'
                            />
                            <div>
                                <h1 className='font-semibold text-xl cursor-pointer'>
                                    Vishal Prajapati
                                </h1>
                                <p className='text-sm'>Btech Student</p>
                            </div>
                        </div>
                        <div>
                            {/* Desktop Navbar */}
                            <ul className='hidden md:flex space-x-8'>
                                {navitems.map((item) => (
                                    <li key={item.id}>
                                        <a href={`${item.name}`} onClick={() => setMenu(false)}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Navbar Icon */}
                            <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                                {menu ? <IoClose /> : <CiMenuKebab />}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {menu && (
                        <div className='md:hidden bg-white absolute top-20 w-full flex transition-all duration-1000 ease-in-out shadow'>
                            <ul className='flex flex-col items-center space-y-4 justify-center text-xl'>
                                {navitems.map((item) => (
                                    <li key={item.id}>
                                        <a href={`${item.name}`} onClick={() => setMenu(false)}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Add this CSS for smooth scrolling */}
            <style jsx>{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </>
    );
}
