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
            I have hands-on experience in designing scalable web platforms, building secure microservices, and deploying cloud-based solutions that deliver real-world impact.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Currently, I&apos;m a <strong>Software Engineer at UF Health</strong>, where I develop robust web applications using <strong>React.js, TypeScript, Node.js (Express), and Oracle SQL</strong>. 
            My work includes architecting RESTful APIs, implementing secure authentication systems, and managing CI/CD pipelines with <strong>GitHub Actions, Docker, and AWS</strong> to ensure scalability, performance, and reliability.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Previously, I built an <strong>agricultural data dashboard</strong> at the International Institute of Information Technology using <strong>React.js, Redux, TypeScript, and Node.js</strong>, and led projects such as <strong>Home Finder</strong>, a responsive housing portal, and <strong>MedIntel Agent</strong>, an AI-powered clinical decision support system. 
            These projects strengthened my expertise in both frontend and backend development, as well as UI/UX design using <strong>Figma</strong>.
          </p>

          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            My technical toolkit includes <strong>React.js, TypeScript, Node.js, Redux, AWS, Docker, PostgreSQL, MongoDB, and RESTful APIs</strong>. 
            I thrive in <strong>Agile/SCRUM environments</strong> and am driven by a passion for creating intelligent, scalable, and user-centric web solutions that combine technology with meaningful user experiences.
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
