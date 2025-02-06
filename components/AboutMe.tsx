import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams'

const AboutMe = () => {
  return (
    <div className="h-auto w-full rounded-md bg-black-100 relative flex flex-col items-center justify-center antialiased border border-white/10 p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl mx-auto">
        <div className="w-full md:w-2/3 p-4 text-center md:text-left">
          <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-black-300 font-sans font-bold">
            About Me
          </h1>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            My journey with technology began when I realized the potential of web development to create intuitive and impactful digital experiences. 
            Since then, I have been dedicated to mastering the craft of full-stack development, building scalable and user-centric applications. 
            With over two years of experience, I specialize in developing high-performance web applications using React and Angular on the front end 
            and Node.js and Django on the back end. My expertise lies in optimizing system efficiency, API performance, and real-time data processing, ensuring seamless user interactions.
          </p>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            I have experience with AWS services like EC2, S3, and SageMaker, leveraging MongoDB and PostgreSQL for robust data management. 
            I also focus on frontend performance optimizations, utilizing custom React hooks and multi-language support to enhance accessibility and speed. 
            Currently pursuing my Master&apos;s in Computer Science at the University of Florida, I am passionate about distributed systems, cloud computing, and algorithmic optimization.
          </p>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            My work at UF Health Cancer Center involves developing advanced web applications for medical imaging, enhancing research and diagnostics. 
            Beyond coding, I enjoy cricket and exploring tech innovations, always looking for new challenges to push the boundaries of web development.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="/unsplash.jpg" alt="image" className="h-48 md:h-64 w-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default AboutMe
