 /* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import Logo from '/home/red/projects/portfolio-web/src/assets/Manas Navale-logos_white.png';

const navbar = () => {
  return (
    <div className = "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300">
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '100px', height: '100px'}} />
        </div>
        {/*menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Hamburger*/}
        <div>
            <FaBars/>
        </div>
        {/*Mobile Menu*/}
        <div>
        <ul className = 'hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Social Icons*/}
        <div></div>
    </div>
  )
}
export default navbar