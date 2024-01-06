import React from 'react'
import DarkMode from './DarkMode'
 export const NavLinks = [
    {
        id: 1 ,
        name: "HOME" ,
        link : "/#"
    },
    {
        id: 2 ,
        name: "PROJECTS" ,
        link : "/#projects"
    },
    {
        id: 3 ,
        name: "ABOUT" ,
        link : "/#about"
    },
    {
        id: 4 ,
        name: "CONTACT" ,
        link : "/#contact"
    },
]
const Navbar = () => {
  return (
    <div className='shadow-md w-full dark:bg-black dark:text-white '>
        <div className='container py-2 sm:py-0  '>
                <div className="flex justify-between items-center">
                    <div>
                        <span className='text-3xl font-bold'>Portfolio</span>
                    </div>
                    <div className='hidden sm:block' >
                        <ul className='flex items-center gap-6 '>
                            {
                                NavLinks.map( ({id , name , link}) => {
                                  return  <li key={id}>
                                        <a href={link}
                                        className='inline-block text-lg font-medium py-3 hover:text-primary transition-all duration-400 '
                                        >{name}</a>
                                    </li>

                                })
                            }
                        </ul>
                    </div>
                    <DarkMode/>
                </div>
        </div>
      
    </div>
  )
}

export default Navbar
 