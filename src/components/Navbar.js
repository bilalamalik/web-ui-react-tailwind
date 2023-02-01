import { useState } from "react";
import {close, logo, menu } from '../assets';
import {navLinks} from '../constants'

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(true)

    return (  
        <nav className=" w-full flex py-6 justify-between items-center navbar">
            <img src={logo} className="w-[124px]" alt="logo" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
               {navLinks.map((nav, index) => (
                <li key={nav.id} className={`text-white font-normal font-poppins cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
               ))}
                
            </ul>
            <div className=" sm:hidden flex flex-1 justify-end items-center">
                <img className="w-[30px] object-contain" alt="menu" src={toggleIcon ? close : menu } onClick={() =>{setToggleIcon((prev) => !prev)}}></img>
                <div className= {`p-6  bg-black-gradient absolute top-20 right-0 mx-4 my-2 sidebar  ${toggleIcon ? 'flex' : 'hidden'}`}>
                    <ul className="list-none flex flex-col justify-start  items-start flex-1">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`text-white font-normal font-poppins cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
         </nav>
         
    );
}
 
export default Navbar;