import React from 'react'
import PersonImg from "../assets/website/my photo.jpg"
const Hero = () => {
  return (
    <div className='dark:bg-black w-full dark:text-white'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 ">
            {/* image section */}
            <div>
                <div>
                    <img src={PersonImg} alt=""  width={300} height={300}/>
                </div>
            </div>
            {/* description section */}
            <div className='space-y-3 '>
                <p className='text-primary'>Hello I'm Gaurav</p>
                <h1 className='text-5xl font-semibold'>Full-Stack Developer</h1>
                <p>
As an MCA student, I specialize in MERN full stack development, mastering technologies like MongoDB, Express.js, React.js, and Node.js. Proficient in C++, I leverage its power for robust backend solutions. Skilled in essential tools such as GitHub, VSCode, and Postman, I ensure efficient development and seamless project management.</p>
<button className='uppercase bg-primary text-white py-2 px-6 hover:bg-primary/80 duration-300'>Hire Me</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
