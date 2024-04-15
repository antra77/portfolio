import { admin, insta, pin, prompt, workflow } from "../assets/images";
import {
  behance,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  tailwindcss,
  figma,
  adobe,
  python,
  flutter,
  notion,dashboard,auth,obys,pinterest,promptverse,wizard,native
} from "../assets/icons";  

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: native,
    name: "React Native",
    type: "App development",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },

  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: adobe,
    name: "Adobe",
    type: "Design",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Mobile Development",
  },
  {
    imageUrl: notion,
    name: "Notion",
    type: "Productivity Tools",
  },
];

export const experiences = [
  {
    title: "React Admin Dashboard",
    tech_name: "React",
    icon: admin,
    iconBg: "#d1d0ef",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Leveraging React, Syncfusion, and Tailwind CSS, this admin dashboard offers a highly customizable and responsive interface for efficient management of orders, employees, and customers.",
      "Designed for seamless and intuitive navigation, it enhances user experience and operational efficiency through a well-organized layout.",
      "Features a comprehensive suite of applications and visualizations, optimizing administrative tasks and data analysis capabilities.",
    ],
  },
  {
    title: "Pinterest Clone",
    tech_name: "Node.js",
    icon: pin,
    iconBg: "#f4adad",
    date: "Dec 2023 - Jan 2024",
    points: [
      "The Pinterest Clone project replicates Pinterest's visual layout and core functionality, allowing users to explore, bookmark, and categorize images and concepts.",
      "Utilizes a robust tech stack comprising Node.js, Express, MongoDB, EJS, and Tailwind CSS to deliver a dynamic and responsive user experience.",
      "Designed to facilitate user interaction and content discovery, the platform supports image saving, organization into collections, and social sharing features.",
    ],
  },

  {
    title: "Visionexus",
    tech_name: "MERN",
    icon: insta,
    iconBg: "#ECE5DB",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Visionexus is an Instagram clone developed with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Material UI, providing a familiar interface and seamless user experience.",
      "It incorporates CRUD functionality, enabling users to Create, Read, Update, and Delete posts, profiles, and other content.",
      "Offering advanced features like adding or removing friends, liking posts, and creating posts on behalf of other users, Visionexus aims to replicate the core functionalities of Instagram while providing additional capabilities for user engagement and content creation.",
    ],
  },
  {
    title: "Workflow Wizard",
    tech_name: "MERN",
    icon: workflow,
    iconBg: "#e1eef7",
    date: "Feb 2024 - Mar 2024",
    points: [
      "Workflow-Wizard is a comprehensive task management application constructed with the MERN stack (MongoDB, Express, React, Node.js), offering a robust and scalable solution for organizing and optimizing workflows.",
      "With its multi-functionality features, Workflow-Wizard aims to streamline task management processes by providing a diverse range of tools and capabilities tailored to meet various organizational needs.",
      "From task assignment and tracking to deadline management and collaboration, Workflow-Wizard empowers users to efficiently manage their tasks and projects while enhancing productivity and efficiency across teams.",
    ],
  },
  {
    title: "Promptverse",
    tech_name: "Next.js",
    icon: prompt,
    iconBg: "#c9efd1",
    date: "Mar 2024 - Apr 2024",
    points: [
      "Promptverse is an innovative AI prompt application developed using Next.js, offering users a seamless experience for creating, editing, copying, and deleting prompts with ease.",
      "Featuring tag-based search functionality, Promptverse enables users to explore a wide array of ideas and prompts tailored to their interests, enhancing creativity and inspiration.",
      "With its intuitive interface and advanced features, Promptverse empowers users to generate and explore prompts effortlessly, facilitating creative expression and brainstorming activities",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/antra77",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/antrasaraf20",
  },
  {
    name: "Behance",
    iconUrl: behance,
    link: "https://www.behance.net/antrasaraf",
  },
];

export const projects = [
  {
    iconUrl: wizard,
    theme: "btn-back-blue",
    name: "Workflow-wizard", 
    description:
      "Workflow-Wizard is a multi-functionality task management app built using the MERN stack which is designed to streamline task management processes with multi functionality features.",
    link: "https://github.com/antra77/workflow-wizard",
  },
  {
    iconUrl: promptverse,
    theme: "btn-back-green",
    name: "Promptverse", 
    description:
      "Promptverse is an AI prompt app built with Next.js. Promptverse allows users to create, edit, copy, and delete prompts effortlessly. With tag-based search functionality, users can easily discover ideas tailored to their interests.",
    link: "https://github.com/antra77/promptverse",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Visonexus", 
    description:
      "Visionexus is an Instagram clone built using the MERN stack and Material UI. Visionexus offers CRUD functionality, dark theme support, and advanced features such as adding or removing friends, liking posts, and creating posts using others' profiles.",
    link: "https://github.com/antra77/visionexus",
  },

  {
    iconUrl: pinterest,
    theme: "btn-back-red",
    name: "Pinterest-Clone", 
    description:
      "Pinterest Clone project is a web application inspired by Pinterest's layout and functionality. This clone is built using Node.js, Express, MongoDB, EJS, and Tailwind CSS, offering a platform for users to discover, save, and organize images and ideas.",
    link: "https://github.com/antra77/Pinterest-Clone",
  },
  {
    iconUrl: dashboard,
    theme: "btn-back-purple",
    name: "Admin Dashboard", 
    description:
      "This dashboard is designed to streamline the management of orders, employees, and customers through a seamless and intuitive user interface.",
    link: "https://github.com/antra77/Admin-Dashboard",
  },


  {
    iconUrl: pricewise,
    theme: "btn-back-orange",
    name: "ShopSphere",
    description:
      "ShopSphere is an e-commerce website built using Vite, Tailwind CSS, React, Redux, Axios, and APIs and offers a range of features including CRUD operations",
    link: "https://github.com/antra77/ShopSphere",
  },



  {
    iconUrl: obys,
    theme: "btn-back-black",
    name: "Obys Agency Clone", 
    description:
      "This project is a clone of the Obys Agency website, implemented using HTML, CSS, JavaScript, GSAP, Locomotive Scroll, and Shery.js.",
    link: "https://github.com/antra77/Obys-Agency-Clone",
  },  
  {
    iconUrl: auth,
    theme: "btn-back-yellow",
    name: "Flutter Auth App", 
    description:
      "A Flutter project that includes a welcome page with sign-in and sign-up functionality.",
    link: "https://github.com/antra77/Auth-App-Flutter",
  },

  
];
