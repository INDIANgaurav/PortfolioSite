import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
 const NavLinks = [
  {
      id: 1 ,
      name: "HOME" ,
      link : "/"
  },
  {
      id: 2 ,
      name: "PROJECTS" ,
      link : "/projects"
  },
  {
      id: 3 ,
      name: "ABOUT" ,
      link : "/about"
  },
  {
      id: 4 ,
      name: "CONTACT" ,
      link : "/contact"
  },
]
const Footer = () => {
  return (
    <div className="dark:bg-black  dark:text-white py-14">
      <div className="container">
        <ul className="flex items-center justify-center gap-6">
          {
             NavLinks.map( ({id , name , link}) => (
                <li key={id}>
                  <a href={link}>{name}</a>
                </li>
             ))
          }
        </ul>
        <section className="bg-dark container">
          <div className="mt-10 p-6 flex items-center justify-between gap-6">
            <h1 className="text-3xl font-bold">Profiles :-</h1>
            <div className="flex gap-6">
              <FaLinkedin className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300 " />
              <FaGithub className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
              <FaInstagram className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </div>
            <div className="hidden sm:block"> 💗 By GauravParasar</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
