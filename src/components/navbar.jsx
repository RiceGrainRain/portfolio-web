/* eslint-disable react-hooks/rules-of-hooks */
 /* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import Logo from '/home/red/projects/portfolio-web/src/assets/Manas Navale-logos_white.png';

const navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className = "fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-white">
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '100px', height: '100px'}} />
        </div>

        {/*menu */}
        
        <div className='p-28'></div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>


        {/*Hamburger*/}
        <div onClick={handleClick} className ='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>

        {/*Mobile Menu*/}
        <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        </div>

        {/*Social Icons*/}
        <div className='hidden'></div>
    </div>
  )
}
export default navbar