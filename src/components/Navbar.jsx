import React, { useState } from 'react'
import { styles } from "../style";
import { navLinks } from "../constants/index";
import logo from "../assets/k_logo.jpg";
import { Link }from "react-router-dom"
import { menu,close } from "../assets"

const Navbar = () => {
  let [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full bg-white items-center py-5 fixed top-0 z-20 flex `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={()=> {setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="loading..." className='w-20 h-9 object-contain' />
          <p className='text-[18px] font-bold cursor-pointer flex text-black'>
            Krishna Mohan
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
            className={`${
              active === link.title ? 
              "text-green-600":"text-black"
            } hover:text-green-600 text-[18px] font-medium curser-pointer`}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex:1 justify-end items-center'>
          <img src={toggle? close : menu} alt="menu" 
          className='w-[28px] h-[28px] object-contain curser-pointer bg-primary'
          onClick={() => setToggle(!toggle)}  />

          <div className={`${!toggle ? 'hidden':'flex'} p-6 bg-white absolute top-20 
          right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col'>
              {navLinks.map((link) => (
                <li key={link.id}
                className={`${
                  active === link.title ? 
                  "text-green-600":"text-black"
                } font-poppins text-[16px] font-medium curser-pointer`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar