import recipeAppImg from "@/public/recipeApp.png";
import boredomBuddyImg from "@/public/boredombuddy.png";
import navinewsImg from "@/public/navinews.png";
import novaImg from "@/public/nova.png";

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
    title: "DevHorizonNova",
    description:
      "A RAG-powered chatbot built for tech enthusiasts, providing insights into tech stacks, companies, and required technical skills, empowering users to achieve their career goals.",
    tags: ["LangChain", "OpenAI", "GoogleGemini", "AstraDB", "Next.js"],
    imageUrl: novaImg,
    githubUrl: "https://github.com/JalalA984/rag-chatbot"
  },
  {
    title: "NaviNews",
    description:
      "A web application that integrates with the ‘NewsAPI’, allowing users to explore current world news and save their interests and articles for easy access later.",
    tags: ["Python Flask", "API", "MongoDB", "Docker", "TailwindCSS"],
    imageUrl: navinewsImg,
    githubUrl: "https://navinews.onrender.com/"
  },
  {
    title: "Recipe App",
    description:
      "Application allows users to securely register, log in, and perform CRUD operations on personal and community recipe collections.",
    tags: ["MongoDB/Mongoose", "Next.js", "React.js", "RestAPI", "JWT Authentication", "TailwindCSS"],
    imageUrl: recipeAppImg,
    githubUrl: "https://github.com/JalalA984/full-stack-recipe-app"
  },
  {
    title: "Boredom Buddy",
    description:
      "An activity generator application that integrates with the ‘BoredAPI’. Users can log in, generate activities, and track past activity history in a NoSQL database.",
    tags: ["Node.js", "API", "Express.js", "MongoDB", "HTML/CSS", "Templating (EJS)"],
    imageUrl: boredomBuddyImg,
    githubUrl: "https://boredombuddyv2.onrender.com/"
  },

] as const;

export const skillsData = [
  {
    name: "Java",
    percentage: "80%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Python",
    percentage: "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    percentage: "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Go",
    percentage: "60%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
  },
  {
    name: "C/C++",
    percentage: "60%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "SQL",
    percentage: "60%",
    imageUrl: "https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg",
  },
  {
    name: "OCaml",
    percentage: "50%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UOLg9ac6zyuQkAASLfskkWgNn6o8hI_lVg&s",
  },
  {
    name: "Rust",
    percentage: "50%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
  },
] as const;

export const techData = [
  {
    name: "Next.js",
    percentage: "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "MongoDB",
    percentage: "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Flask",
    percentage: "65%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Git",
    percentage: "50%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    percentage: "30%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Spring",
    percentage: "10%",
    imageUrl: "  https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Flutter",
    percentage: "5%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },   
] as const;

export const coursesData = [
  {
    title: "CMSC320 - Data Science & ML",
    description:
      "An overview of the data science pipeline, including statistical analysis and machine learning using Python.",
    link: "https://cmsc320.github.io/",
  },
  {
    title: "CMSC420 - Advanced Data Structures",
    description:
      "Studies advanced data structures like B-trees and KD-Trees, with applications in various fields.",
    link: "https://www.cs.umd.edu/class/spring2022/cmsc420-0101/",
  },
  {
    title: "CMSC451 - Advanced Algorithm Design",
    description:
      "Covers advanced techniques for designing efficient algorithms, including dynamic programming and network flow.",
    link: "https://www.cs.umd.edu/~laxman/CMSC451-F23.html",
  },
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
] as const;
