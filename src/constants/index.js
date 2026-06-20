import {
    mobile,
    backend,
    lock,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    download,
    download1,
    DCInfotech,
    Express,
    
    chatNow,
    carrent,
    Image_Gen,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Express",
      icon : Express,
    }
    
  ];
  
  const experiences = [
    {
      title: "Web Development Intern",
      company_name : "Bharat Intern",
      icon: DCInfotech,
      iconBg: "383E56",
      date: "July 2023 - August 2023",
      points:[
        "Debugging Web Applications",
        "Designing 3d and animated websites",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Developing and maintaining web applications using React.js and other related technologies.",
      ]
    },
    // 
    
    // {
    //   title: "Web Developer",
    //   company_name: "Udemy",
    //   icon: download1,
    //   iconBg: "#383E56",
    //   date: "Jan 2023 - June 2024",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Slack",
      description:
        "Manage tasks seamlessly with this sleek web app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {name: "JavaScript",
          color: "green-text-gradient",
        }
      ],
      image: carrent,
      website_link: "https://slate-three-ashy.vercel.app/",
      source_code_link:"https://github.com/Gaganv452/Slate",
    },
    {
      name: "Image Gen",
      description:
        "Image_Gen is an AI-powered image generation platform where users can create stunning images by simply providing a prompt. Using the OpenAI API, the platform generates images based on user inputs, which can be shared with the community or downloaded for personal use. Image_Gen offers a seamless experience for users to explore creativity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name:"MongoDb",
          color:"yellow"
        },
      ],
      image: Image_Gen,
      website_link:"https://image-gen-ashen-six.vercel.app/",
      // source_code_link: "https://github.com/Siser-Pratap/Image_Gen",
    },
    {
      name: "Nova",
      description:
        "Nova is an intelligent chat app powered by Google Gemini API, designed to answer any questions users have instantly. With advanced AI capabilities, ChatNow provides accurate and reliable responses, making it the perfect companion for quick information, problem-solving, and everyday conversations. Whether you need help with research or advice.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name:"MongoDb",
          color:"yellow",
        }
      ],
      image: chatNow,
      website_link:"https://nova-lemon-rho.vercel.app/",
      source_code_link: "https://github.com/Gaganv452/Nova",
      
    },
 {
   name:"AICTE Unified Portal",
   description:" Developed a collaborative platform for educational experts to design and share model curriculums for institutions",
   tags: [
     {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    
      {
         name:"MongoDb",
        color:"text-yellow-500",
      },
       {
        name:"NPM",
         color:"text-amber-600",
      }
      
      ],
     image: lock,
     website_link:"https://unified-aicte-portal.vercel.app/",
     source_code_link: "https://github.com/Gaganv452/Unified-AICTE-Portal",
     },
  ];
  
  export { services, technologies, experiences, testimonials, projects };