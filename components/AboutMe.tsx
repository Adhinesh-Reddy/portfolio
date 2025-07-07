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
            I'm Sai Adhinesh Reddy Tatireddy, a passionate and results-driven Computer Science graduate student at the University of Florida, with a strong foundation in full-stack development, cloud-native applications, and generative AI. 
            I bring hands-on experience in designing scalable web applications, building secure microservices, and deploying ML/LLM models for impactful real-world use cases.
          </p>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Currently, I work as a Full Stack Developer at UF Health, where I led the development of a robust medical imaging platform using Spring Boot, ReactJS, and Oracle SQL, optimizing workflows for terabyte-scale datasets. 
            I&apos;ve built and deployed cloud-based solutions using AWS, Docker, Kubernetes, and Kafka, ensuring performance, reliability, and security.
          </p>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            Previously, I developed an admin portal for agriculture data at the International Institute of Information Technology and led the development of platforms like MedIntel Agent, a clinical decision-support AI system using LLaMA 3 and BERT, and Home Finder, a responsive housing search portal for international students.
          </p>
          <p className="text-white text-md md:text-lg mt-4 leading-relaxed">
            My technical toolkit includes Java, Python, TypeScript, React, Spring Boot, AWS, MongoDB, Kafka, PyTorch, and tools like Prometheus, Grafana, and ELK for monitoring and observability. 
            With a solid academic background and published work in deep learning for malware detection, I&apos;m driven by a passion to build intelligent, scalable, and user-centric applications that bridge the gap between AI and practical human needs.
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
