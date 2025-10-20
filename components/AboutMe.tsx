import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams'

const AboutMe = () => {
  return (
    <div className="h-auto w-full rounded-md bg-black-100 relative flex flex-col items-center justify-center antialiased border border-white/10 p-6 md:p-12" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl mx-auto">
        <div className="w-full md:w-2/3 p-4 text-center md:text-left">
          <h1 className="relative z-10 text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-black-300 font-sans font-bold">
            About Me
          </h1>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            I&apos;m <strong>Sai Adhinesh Reddy Tatireddy</strong>, a passionate and results-driven Computer Science graduate student at the <strong>University of Florida</strong>, specializing in <strong>Full Stack Development</strong>, <strong>Cloud-Native Applications</strong>, and <strong>Generative AI</strong>. 
            I have hands-on experience designing scalable web platforms, building secure microservices, and deploying cloud-based solutions that deliver measurable real-world impact.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Currently, I&apos;m a <strong>Software Engineer at UF Health</strong>, where I develop robust and secure web applications for healthcare research and operations. 
            My work focuses on architecting RESTful services, implementing authentication workflows, and automating deployments with modern CI/CD practices to ensure high performance, scalability, and reliability.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Previously, I contributed to <strong>Crop Darpan</strong> at the <strong>International Institute of Information Technology</strong> — an intelligent agricultural advisory platform aimed at assisting farmers with data-driven insights and crop management. 
            I developed an admin dashboard for managing crop data, improved accessibility through multilingual support, and optimized data visualization for better decision-making.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Beyond that, I’ve led projects like <strong>Home Finder</strong>, a responsive housing portal, and <strong>MedIntel Agent</strong>, an AI-powered clinical decision support system. 
            These experiences strengthened my expertise across the full stack and deepened my passion for creating impactful, user-centric applications that blend technology with meaningful real-world solutions.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            I thrive in <strong>Agile/SCRUM environments</strong> and enjoy working at the intersection of innovation and scalability — transforming complex problems into intuitive, high-performing web solutions.
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
