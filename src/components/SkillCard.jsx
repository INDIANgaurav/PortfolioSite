import React from 'react'
import { FaReact,FaNodeJs  } from "react-icons/fa";
import { SiMongodb,SiExpress  } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const skillsData = [
    {
        id:1,
        name : "ReactJs",
        icon: (
            <FaReact />
        ),
        desc:" Javascript library"
    },
    {
        id:2,
        name : "ExpressJs",
        icon: (
            <SiExpress />
        ),
        desc:" NodeJs Framework "
    },
    {
        id:3,
        name : "MongoDb",
        icon: (
            <SiMongodb />
        ),
        desc:" NoSql Database "
    },
    {
        id:4,
        name : "Nodejs",
        icon: (
            <FaNodeJs />
        ),
        desc:" Javascript library"
    },
    {
        id:5,
        name : "NextJs",
        icon: (
            <TbBrandNextjs />
        ),
        desc:" reactjs library"
    },
    {
        id:6,
        name : "TailwindCss",
        icon: (
            <SiTailwindcss />
        ),
        desc:" CSS Framework "
    },
    {
        id:7,
        name : "Postman",
        icon: (
            <SiPostman />
        ),
        desc:" Api Tester"
    },
    {
        id:4,
        name : "Github",
        icon: (
            <FaGithub />
        ),
        desc:" Version Control "
    },
    
]
const SkillCard = () => {
  return (
    <> 
    <span id='about'></span>
    <div className='dark:bg-black w-full dark:text-white py-14  '> 
        <div className="container flex items-center justify-center  ">
<div className="grid grid-cols-2  w-[650px] md:grid-cols-3 lg:grid-cols-3     gap-4">
{
    skillsData.map( (skill , id ) => {
        return <div key={id} className='group space-y-3 bg-dark p-3  hover:bg-primary duration-300 text-white'>
            <div className='text-5xl  text-primary group-hover:text-white duration-300' >{skill.icon}</div>
            <h1 className='text-2xl font-bold'>{skill.name}</h1>
            <p>{skill.desc}</p>
        </div>
    })
}
</div>
        </div>
      
    </div>
            </>
  )
}

export default SkillCard
