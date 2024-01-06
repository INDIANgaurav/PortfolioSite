import React from 'react'
import web1 from "../assets/website/Screenshot (109).png"
import web2 from "../assets/website/Screenshot (110).png"
const ProjectData = [
    {
       id:1,
       name : "StudyNotion Edtech App " ,
       image:  web1,
       link: "https://studynotion-edtech-project.vercel.app/"
    },
    {
       id:2,
       name : "Glamour Food App " ,
       image:  web2,
       link: "https://glamour-food.vercel.app/"
    },
]

const Projects = () => {
  return (
        <>
        <span id='projects'></span>
    <div className='py-14 dark:bg-black dark:text-white '>
        <div className='container'>
            <header className='flex justify-between items-center mb-8 '>
                <div >
                    <h1 className='uppercase text-3xl font-bold '>Featured Projects</h1>
                    <p>using MERN stack :- </p>


                </div>
                <div>
                    <button className='bg-primary hover:bg-primary/80
                    duration-300 py-2 px-6 text-white' >
                      View All
                    </button>
                </div>
            </header>
            {/* card SEction */}
            <section>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
                    {
                        ProjectData.map( ({id , name , image , link }) => (
                            <div  key={id}   > 
                                   <div className='h-[340px] sm:h-[440px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6    '>
                                    <img src={image} alt="" />
                                    </div> 
                                    <div className='py-4 space-y-3 '>
                                        <h1 className='text-3xl font-bold' >{name} </h1>
                                    <div>
                                        <a href={link} target="_blank" className='text-primary  uppercase ' > Link  </a>
                                    </div>
                                        </div> 





                            </div>
                        ))
                    }

                </div>
            </section>
            
        </div>
      
    </div>

                    </>
  
  )
}

export default Projects
