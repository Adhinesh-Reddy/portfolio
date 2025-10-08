export const navItems = [
  { name: "About", link: "#about" },
  {name: "Experience", link: "#experience"},
  {name: "Education", link: "#education"},
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Crop Darpan",
    des: "The Crop Darpan tool is built to enable the typical farmer to identify the crop  problem. The Crop Darpan tool guides the farmer to identify the field problem.",
    img: "/project1.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Research Software Engineer",
//     desc: "•	Led the development of ReactJS/NodeJS web application for medical image contouring, increasing Regions of Interest(ROI) precision by 20% and streamlining analysis workflow. •	Engineered real-time image interaction features, enabling video playback for ROI visualization across 700+ sequential frames. •	Architected backend with NodeJS and MongoDB, ensuring efficient handling of large dataset around 10gb and secure stor-age of contoured images and metadata. •	Contributed to CI CD pipeline using Git, resulting 20% faster release cycles. •	Deployed models on AWS SageMaker, improving large-scale data processing speed by 25% with optimized cloud architecture leveraging IAM, EC2 and S3 services.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     desc: "•	Developed an admin portal for crop data using HTML5, JavaScript, CSS, ReactJS and TypeScript, revolutionizing human interaction and implementing multi-language support for broader accessibility. •	Implemented REST APIs to connect the application to the backend services and REST API calls to reduce load times resulting in 15% increase in page speed. •	Optimized React rendering performance by implementing custom hooks, reducing unnecessary re-renders by 40% and improving overall application responsiveness. •	Leveraged Figma to craft intuitive UI/UX designs, significantly improving user experience by 30% and streamlining crop data visualization processes.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
// ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const workExperience = [
  {
    title: "Software Engineer",
    content: (
      <div>
        <div className="flex justify-between pb-5">
          <p className="hidden md:block text-xl md:text-2xl font-normal text-purple dark:text-purple">
            UF Health
          </p>
          <p className="hidden md:block text-2xl md:text-2xl font-normal text-purple dark:text-purple">
            September 2023 - Present
          </p>
        </div>

        <ul className="list-disc pl-3 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          <li>
            Developed web applications using frontend technologies like <strong>React.js, TypeScript, and Redux</strong> improving ROI precision by 20% and optimizing analysis workflows for 1TB-scale datasets and image metadata.
          </li>
          <li>
            Built backend services with <strong>Node.js (Express)</strong> and <strong>Oracle SQL</strong>, for robust data management and seamless API integration.
          </li>
          <li>
            Designed responsive user interfaces in <strong>Figma</strong>, for seamless alignment between UI/UX design and frontend implementa-tion.
          </li>
          <li>
            Architected secure <strong>REST-based microservices</strong> with JWT and OAuth2 authentication; enhanced fault tolerance with retry logic and error handling.  
          </li>
          <li>
            Built <strong>CI/CD pipelines</strong> using <strong>GitHub Actions and Docker</strong>; deployed on <strong>AWS</strong> (Lambda, S3, RDS, EC2, IAM) in an <strong>Agile SCRUM environment</strong> and maintained observability with <strong>Prometheus, Grafana, ELK stack</strong>.
          </li>
          <li>
            Ensured robust code quality with comprehensive testing using <strong>React Testing Library</strong> and <strong>Jest</strong>, improving application relia-bility and maintainability by 90%.
          </li>

        </ul>
        
      </div>
    ),
  },

  {
    title: "Software Engineer",
    content: (
      <div>
        <div className="flex justify-between pb-5">
          <p className="hidden md:block text-xl md:text-2xl font-normal text-purple dark:text-purple">
            International Institute of Information Technology
          </p>
          <p className="hidden md:block text-2xl md:text-2xl font-base text-purple dark:text-purple">
            April 2021 - October 2021
          </p>
        </div>

        <ul className="list-disc pl-3 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          <li>
            Developed an admin portal for crop data using <strong>HTML5, JavaScript, CSS, ReactJS, and TypeScript</strong>, revolutionizing human interaction and implementing multi-language support for broader accessibility.
          </li>
          <li>
            Implemented <strong>Redux</strong> for predictable state management, improving data consistency and scalability across the application.
          </li>
          <li>
            Implemented <strong>RESTful APIs</strong> to connect the application to backend services; optimized API calls, reducing load times and increasing page speed by 15%.
          </li>
          <li>
            Optimized React rendering performance using <strong>custom hooks</strong>, reducing unnecessary re-renders by 40% and improving overall application responsiveness.
          </li>
          <li>
            Leveraged <strong>Figma</strong> to craft intuitive UI/UX designs, improving user experience by 30% and streamlining crop data visualization processes.
          </li>
          <li>
            Utilized <strong>Postman</strong> for API testing and ensured high code quality with <strong>React Testing Library and Jest</strong>, improving reliability and reducing regressions.
          </li>

        </ul>
        
      </div>
    ),
  }

];

const coursework1 = [
  {
    title: "Analysis of Algorithms",
    link: "education"
  },
  {
    title: "Advanced Data Structures",
    link: ""
  },
  {
    title: "Human Computer Interaction",
    link: ""
  },
  {
    title: "Computer Networks",
    link: ""
  },
  {
    title: "Computer and Information Security",
    link: ""
  },
  {
    title: "Software Engineering",
    link: ""
  },
  {
    title: "Math for Intelligent Systems",
    link: ""
  },
]
const coursework2 = [
  {
    title: "Data Structures and Algorithms",
    link: "education"
  },
  {
    title: "Operating Systems",
    link: ""
  },
  {
    title: "Computer Networks",
    link: ""
  },
  {
    title: "Database Management Systems",
    link: ""
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    link: ""
  },
  {
    title: "Software Engineering",
    link: ""
  },
  {
    title: "Web Technologies",
    link: ""
  },
  {
    title: "Cloud Computing Fundamentals",
    link: ""
  }
]

export const tabs = [
  {
    title: "Graduate",
    value: "graduate",
    course: coursework1,
    image: (
      <img src="/UF.webp" alt="image" className="w-full h-full object-cover"/>
    ),
    content: (
      <div>
        <h1 className="font-bold text-2xl mb-4">
          Master's in Computer and Information Science and Engineering at <span className="text-purple"> University of Florida</span>
        </h1>
        <p>
          At the University of Florida, I have concentrated on mastering advanced concepts in algorithms, data science, and computer network security, 
          while building a robust theoretical and practical foundation in distributed systems, machine learning, and cloud computing. 
          The program's emphasis on cutting-edge technologies and complex problem-solving has equipped me with the tools to architect 
          scalable systems and optimize computational efficiency in diverse environments.
        </p>
      </div>
    ),
  },
  {
    title: "Undergraduate",
    value: "undergraduate",
    course: coursework2,
    image:(
      <img src="/manipal.png" alt="image" className="w-full h-full object-cover"/>
    ),
    content: (
      <div>
        <h1 className="font-bold text-2xl mb-4">
          Bachelor of Technology in Computer Science and Engineering at <span className="text-purple"> Manipal University</span>
        </h1>
        <p>
          At Manipal University Jaipur, I focused on cultivating a strong foundational understanding of computer science, spanning both core theory and hands-on application. 
          My academic journey emphasized data structures, algorithm design, and system architecture, while also enabling me to explore key areas like machine learning, database systems, and software engineering.
          Through a combination of rigorous coursework and project-based learning, I developed the technical depth and problem-solving skills essential for building intelligent, scalable applications and contributing to multidisciplinary development teams.
        </p>
      </div>
    ),
  },
];