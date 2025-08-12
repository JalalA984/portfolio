import recipeAppImg from "@/public/recipeApp.png";
import boredomBuddyImg from "@/public/boredombuddy.png";
import navinewsImg from "@/public/navinews.png";
import novaImg from "@/public/nova.png";
import miniapptrakImg from "@/public/miniapptrak.png";
import activePalsImg from "@/public/activepals.png";
import apptrakImg from "@/public/apptrak.png";
import ecommerceImg from "@/public/ecommerce.png";
import codeguardianImg from "@/public/codeguardian.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Coursework",
    hash: "#coursework",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "AppTrak (In Dev.)",
    description:
      "Web app powered by Go and SQL, with a focus on security, allowing users to effortlessly manage and track their applications.",
    tags: [
      "Go",
      "MySQL",
      "Session Management",
      "TLS Certificate",
      "HTTPS",
      "Unit Testing",
    ],
    imageUrl: apptrakImg,
    githubUrl: "https://github.com/JalalA984/apptrak",
  },
  {
    title: "CodeGuardian (In Dev.)",
    description:
      "Integrates AI models, ML, and Cybersecurity principles to help developers write more secure code by identifying security risks and providing code insights.",
    tags: ["Go", "PostgreSQL", "Redis", "React", "PyTorch", "Docker"],
    imageUrl: codeguardianImg,
    githubUrl: "https://github.com/JalalA984/codeguardian",
  },
  {
    title: "E-commerce Backend",
    description:
      "A simple REST API backend for e-commerce app with Spring Security being implemented.",
    tags: ["Spring Boot", "Spring Web", "JPA", "H2", "Spring Security"],
    imageUrl: ecommerceImg,
    githubUrl: "https://github.com/JalalA984/ecommerce-backend",
  },
  {
    title: "ActivePals",
    description:
      "Mobile app allows community of users to share detailed exercise preferences so that alternating instructors have a centralized method to facilitate group workouts.",
    tags: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Hosting",
    ],
    imageUrl: activePalsImg,
    githubUrl: "https://activepals-2025.web.app/",
  },
  {
    title: "Mini-AppTrak",
    description:
      "A localized way to track applications using JSON to persist data. This project serves as a precursor to a full-stack application currently being developed with Auth. and MySQL",
    tags: ["Go", "JSON", "I/O", "Synchronization"],
    imageUrl: miniapptrakImg,
    githubUrl: "https://github.com/JalalA984/mini-apptrak",
  },
  {
    title: "DevHorizonNova",
    description:
      "A RAG-powered chatbot built for tech enthusiasts, providing insights into tech stacks, companies, and required technical skills, empowering users to achieve their career goals.",
    tags: ["LangChain", "OpenAI", "GoogleGemini", "AstraDB", "Next.js"],
    imageUrl: novaImg,
    githubUrl: "https://devhorizonnova.onrender.com/",
  },
  {
    title: "NaviNews",
    description:
      "A web application that integrates with the ‘NewsAPI’, allowing users to explore current world news and save their interests and articles for easy access later.",
    tags: ["Python Flask", "API", "MongoDB", "Docker", "TailwindCSS"],
    imageUrl: navinewsImg,
    githubUrl: "https://navinews.onrender.com/",
  },
  {
    title: "Recipe App",
    description:
      "Application allows users to securely register, log in, and perform CRUD operations on personal and community recipe collections.",
    tags: [
      "MongoDB/Mongoose",
      "Next.js",
      "React.js",
      "RestAPI",
      "JWT Authentication",
      "TailwindCSS",
    ],
    imageUrl: recipeAppImg,
    githubUrl: "https://github.com/JalalA984/full-stack-recipe-app",
  },
  {
    title: "Boredom Buddy",
    description:
      "An activity generator application that integrates with the ‘BoredAPI’. Users can log in, generate activities, and track past activity history in a NoSQL database.",
    tags: [
      "Node.js",
      "API",
      "Express.js",
      "MongoDB",
      "HTML/CSS",
      "Templating (EJS)",
    ],
    imageUrl: boredomBuddyImg,
    githubUrl: "https://boredombuddyv2.onrender.com/",
  },
] as const;

export const skillsData = [
  {
    name: "Java",
    percentage: "80%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Python",
    percentage: "70%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    percentage: "70%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Go",
    percentage: "60%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  },
  {
    name: "C/C++",
    percentage: "60%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "SQL",
    percentage: "60%",
    imageUrl:
      "https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg",
  },
  {
    name: "OCaml",
    percentage: "50%",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UOLg9ac6zyuQkAASLfskkWgNn6o8hI_lVg&s",
  },
  {
    name: "Rust",
    percentage: "50%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  },
] as const;

export const techData = [
  {
    name: "Next.js",
    percentage: "70%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MongoDB",
    percentage: "70%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Flask",
    percentage: "65%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Git",
    percentage: "50%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    percentage: "30%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Spring",
    percentage: "20%",
    imageUrl:
      "  https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Flutter",
    percentage: "10%",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Firebase",
    percentage: "10%",
    imageUrl:
      "https://www.gstatic.com/devrel-devsite/prod/vec94db9b1329e6c4d1d9b6b24ba16ad6c02043dcd66ba9c6a8f3d8fa0af3eec7/firebase/images/touchicon-180.png",
  },
] as const;

export const coursesData = [
  {
    title: "CMSC414 - Computer and Network Security",
    description:
      "Introduction to software security, network security, web security, cryptography, and several types of attacks and defenses",
    link: "https://www.cs.umd.edu/class/spring2019/cmsc414/",
  },
  {
    title: "CMSC435 - Software Engineering",
    description:
      "State-of-the-art techniques in software design and development. The development of a capstone software project.",
    link: "https://seam.cs.umd.edu/purtilo/435/",
  },
  {
    title: "CMSC417 - Computer Networks",
    description:
      "Introduction to Internet architecture, HTTP, DNS, P2P, Sockets, TCP/IP, BGP, Routing protocols, wireless and sensor networking, WiFi, cellular and satellite networks, and security.",
    link: "https://www.cs.umd.edu/class/spring2024/cmsc417/",
  },
  {
    title: "CMSC416 - High Performance Computing",
    description:
      "Introduction to parallel computing, parallel architectures and networks, distributed memory programming (MPI), shared-memory programming (OpenMP) and GPU programming (CUDA).",
    link: "https://www.cs.umd.edu/class/fall2024/cmsc416/",
  },
  {
    title: "ENPM818N - Cloud Computing",
    description:
      "In-depth exploration of the fundamentals of cloud computing, its architecture, deployment models, and various services offered by major cloud providers",
    link: "https://mage.umd.edu/enpm818n",
  },
  {
    title: "CMSC498K - Multimodal Deep Learning",
    description:
      "Introduction to fundamental concepts of key modalities and algorithms for multimodal representation learning, alignment, and fusion.",
    link: "https://ruohangao.github.io/teaching/",
  },
] as const;


export const experiencesData = [
  {
    title: "Software Engineer & Researcher - Project ANTS",
    company: "SEAM Lab",
    location: "UMD",
    description: "Worked in a team of 9 including Dr. James Purtilo, Dr. Evan Economo, and Dr. Xiaomin Lin to develop an AI powered tool to help automate locating joint locations in 3D insect CAD models.",
    date: "January 2025 - May 2025",
    skills: ["PyTorch & Python", "Blender", "DeepLabCut", "Computer Vision"],
    url: "https://expo.umd.edu/projects/spring-2025/project-ants",
  },
  {
    title: "Software Engineer",
    company: "Sustainabli",
    location: "Baltimore, MD",
    description: "Worked in a team of 6 to develop a set of new features for our SAAS platform. Focused on UX/UI, backend email services, and statistical analysis of user data.",
    date: "May 2025 - Present",
    skills: ["React.js", "PostgreSQL", "AWS", "Rust"],
    url: "https://www.gosustainabli.com/",
  },
] as const;