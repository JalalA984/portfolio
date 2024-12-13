import recipeAppImg from "@/public/recipeApp.png";
import boredomBuddyImg from "@/public/boredombuddy.png";
import navinewsImg from "@/public/navinews.png";

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
    percentage:
      "80%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" ,
  },
  {
    name: "Python",
    percentage:
      "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" ,
  },
  {
    name: "Javascript",
    percentage:
      "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" ,
  },
  {
    name: "Next.js",
    percentage:
      "50%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" ,
  },
  {
    name: "MongoDB",
    percentage:
      "60%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" ,
  },
  {
    name: "SQL",
    percentage:
      "60%",
    imageUrl: "https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg" ,
  },
  {
    name: "OCaml",
    percentage:
      "65%",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UOLg9ac6zyuQkAASLfskkWgNn6o8hI_lVg&s" ,
  },
  {
    name: "Golang",
    percentage:
      "50%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" ,
  },
  {
    name: "Rust",
    percentage:
      "45%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" ,
  },
  {
    name: "Git",
    percentage:
      "70%",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" ,
  },
] as const;

export const coursesData = [
  {
    title: "CMSC132 - OOP in Java",
    description:
      "Covers design, testing, and debugging of software systems using object-oriented programming in Java.",
    link: "https://www.cs.umd.edu/class/spring2023/cmsc132/",
  },
  {
    title: "CMSC216 - Computer Systems",
    description:
      "Introduces fundamental concepts for executing programs on hardware, using C and MIPS Assembly.",
    link: "https://www.cs.umd.edu/class/fall2023/cmsc216-010X/",
  },
  {
    title: "CMSC250 - Discrete Structures",
    description:
      "Covers mathematical concepts in computer science, including logic, set theory, and introductory graph theory.",
    link: "http://www.cs.umd.edu/class/fall2024/cmsc250-010X/",
  },
  {
    title: "CMSC330 - Language Designs/Implementation",
    description:
      "Explores programming languages and their design, focusing on OCaml and Rust.",
    link: "https://www.cs.umd.edu/class/spring2024/cmsc330-030X-040X/",
  },
  {
    title: "CMSC351 - Algorithms",
    description:
      "Introduces algorithm design techniques and analysis, covering topics like asymptotics and NP-completeness.",
    link: "https://www.cs.umd.edu/class/fall2021/cmsc351-0301/",
  },
  {
    title: "CMSC335 - Full Stack Development",
    description:
      "Focuses on developing web applications using JavaScript for both front-end and back-end.",
    link: "https://www.cs.umd.edu/class/fall2023/cmsc335/",
  },
  {
    title: "CMSC320 - Data Science",
    description:
      "An overview of the data science pipeline, including statistical analysis and machine learning using Python.",
    link: "https://cmsc320.github.io/",
  },
  {
    title: "CMSC420 - Advanced Data Structures",
    description:
      "Studies advanced data structures like B-trees and hash tables, with applications in various fields.",
    link: "https://www.cs.umd.edu/class/spring2022/cmsc420-0101/",
  },
  {
    title: "CMSC451 - Advanced Algorithm Design",
    description:
      "Covers advanced techniques for designing efficient algorithms, including graph algorithms and dynamic programming.",
    link: "https://www.cs.umd.edu/~laxman/CMSC451-F23.html",
  },
] as const;
