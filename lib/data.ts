import boredomBuddyImg from "@/public/boredombuddy.png";
import navinewsImg from "@/public/navinews.png";
import novaImg from "@/public/nova.png";
import miniapptrakImg from "@/public/miniapptrak.png";
import activePalsImg from "@/public/activepals.png";
import logengineImg from "@/public/logengine.png";
import systemsImg from "@/public/systemsViz.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Coursework",
    hash: "/coursework",
  },
  {
    name: "Contact",
    hash: "/contact",
  },
] as const;

export const projectsData = [
  {
    title: "LogEngine (In Dev.)",
    description:
      "Self-driven project to explore distributed systems architecture and consensus protocols by building a scalable, fault-tolerant log system inspired by Apache Kafka.",
    tags: [
      "Go",
      "gRPC",
      "Serf Service Discovery",
      "Kubernetes",
      "TLS",
      "Raft Consensus",
    ],
    imageUrl: logengineImg,
    githubUrl: "https://github.com/JalalA984/logengine",
  },
  {
    title: "Systems Visualizer (In Dev.)",
    description:
      "My aim is to develop a platform that offers interactive visualizations for complex Distributed and ML systems concepts. Inspired by https://thesecretlivesofdata.com/",
    tags: ["Next.js"],
    imageUrl: systemsImg,
    githubUrl: "",
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
    title: "Nova",
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
    category: "Languages",
    items: [
      {
        name: "Java",
        percentage: 80,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "Python",
        percentage: 70,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        percentage: 70,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Go",
        percentage: 70,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
      },
      {
        name: "C/C++",
        percentage: 70,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "SQL",
        percentage: 70,
        image: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
      }, // Replaced with a cleaner SVG
      {
        name: "OCaml",
        percentage: 50,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UOLg9ac6zyuQkAASLfskkWgNn6o8hI_lVg&s",
      }, // Cleaner SVG
      {
        name: "Rust",
        percentage: 50,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libs",
    items: [
      {
        name: "React",
        percentage: 75,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "Spring Boot",
        percentage: 65,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      {
        name: "Flask",
        percentage: 65,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      },
      {
        name: "Next.js",
        percentage: 65,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "MPI",
        percentage: 60,
        image: "",
      },
      {
        name: "CUDA",
        percentage: 60,
        image:
          "https://icons.iconarchive.com/icons/martz90/circle-addon1/128/nvidia-icon.png",
      },
      {
        name: "OpenMP",
        percentage: 60,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/1280px-OpenMP_logo.png",
      },
      {
        name: "Flutter",
        percentage: 30,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      {
        name: "Git",
        percentage: 70,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "PostgreSQL",
        percentage: 65,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "AWS",
        percentage: 60,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        percentage: 60,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
      {
        name: "Docker",
        percentage: 60,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },

      {
        name: "MongoDB",
        percentage: 60,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Kubernetes",
        percentage: 50,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      },

      {
        name: "Firebase",
        percentage: 40,
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      },
    ],
  },
] as const;

export const coursesData = [
  {
    title: "CMSC412 - Operating Systems",
    description:
      "Design and implementation of Operating Systems, i.e. The Ground Truth.",
    link: "https://ceres.cs.umd.edu/412/",
  },
  {
    title: "CMSC414 - Computer and Network Security",
    description:
      "Introduction to software security, network security, web security, cryptography, and several types of attacks and defenses",
    link: "https://www.cs.umd.edu/class/spring2019/cmsc414/",
  },
  {
    title: "CMSC416 - High Performance Computing",
    description:
      "Introduction to parallel computing, parallel architectures and networks, distributed memory programming (MPI), shared-memory programming (OpenMP) and GPU programming (CUDA).",
    link: "https://www.cs.umd.edu/class/fall2024/cmsc416/",
  },
  {
    title: "CMSC417 - Computer Networks",
    description:
      "Introduction to Internet architecture, HTTP, DNS, P2P, Sockets, TCP/IP, BGP, Routing protocols, wireless and sensor networking, WiFi, cellular and satellite networks, and security.",
    link: "https://www.cs.umd.edu/class/spring2024/cmsc417/",
  },
  {
    title: "CMSC435 - Software Engineering",
    description:
      "State-of-the-art techniques in software design and development. The development of a capstone software project.",
    link: "https://seam.cs.umd.edu/purtilo/435/",
  },
  {
    title: "CMSC498B - Distributed Systems & Cloud Computing",
    description:
      "Exploration of cloud and distributed systems, including IaaS (e.g., Open Stack, Kubernetes), key big data platforms (e.g., Apache Spark, Ceph), data center networking (e.g., DCTCP, Fat-Tree), and ML-Systems (e.g., vLLM, SGLang). ",
    link: "https://zaoxing.github.io/teaching/2024-fall-cloud",
  },
  {
    title: "CMSC498K - Multimodal Deep Learning",
    description:
      "Introduction to fundamental concepts of key modalities and algorithms for multimodal representation learning, alignment, and fusion.",
    link: "https://ruohangao.github.io/teaching/",
  },

  {
    title: "CMSC818Q - Advanced Cloud & ML-Systems",
    description:
      "Graduate seminar on large-scale ML systems, covering distributed training, LLM serving, speculative decoding, RLHF, and modern ML infrastructure.",
    link: "https://zaoxing.github.io/teaching/2025-cloud-network",
  },
  {
    title: "ENAI606 - Large Language Models in Engineering AI",
    description:
      "Foundations and frontiers of Large Language Models (LLMs) and extensions like Vision-Language Models (VLMs), exploring the full LLM pipeline—from training to deployment.",
    link: "https://mage.umd.edu/enai606",
  },
  {
    title: "ENPM818N - Cloud Computing",
    description:
      "In-depth exploration of the fundamentals of cloud computing, its architecture, deployment models, and various services offered by major cloud providers with a focus on AWS training.",
    link: "https://mage.umd.edu/enpm818n",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer & Researcher",
    company: "SEAM Lab",
    location: "College Park, MD",
    description:
      "Collaborated directly with client(s) and team of 6 peers, developing an AI-powered pipeline to preprocess, locate joints, and rig 3D insect models for integration with NVIDIA Isaac Sim, enabling simulation-ready assets for robotics biodiversity research.",
    date: "January 2025 - May 2025",
    skills: ["PyTorch & Python", "Blender", "DeepLabCut", "Computer Vision"],
    url: "https://expo.umd.edu/projects/spring-2025/project-ants",
  },
  {
    title: "Cloud & HPC Engineer",
    company: "FROOT Systems Lab",
    location: "College Park, MD",
    description:
      "Led HPC system and cloud-based job-submission workflow design within a cross-functional team of 6, architecting a high-performance cloud simulation platform for additive manufacturing.",
    date: "September 2025 - December 2025",
    skills: [
      "Azure {CycleCloud, Container Instances, Functions, Blob Storage}",
      "Apache Cassandra",
    ],
    url: "",
  },
  {
    title: "Multimodal Deep Learning Researcher",
    company: "UMD",
    location: "College Park, MD",
    description:
      "Developed with my peers, a Multimodal Reverse Dictionary framework to address the 'Tip-of-the-Tongue' retrieval problem, enabling robust, visually-aware lexical retrieval without requiring image inputs at inference.",
    date: "September 2025 - December 2025",
    skills: [
      "Pytorch",
      "StreamLit",
      "HuggingFace",
      "BERT",
      "ResNet",
      "InfoNCE",
      "Distillation",
    ],
    url: "",
  },
  {
    title: "Co-Founder & Software Engineer",
    company: "bette(rX)",
    location: "College Park, MD",
    description:
      "Early stage startup, developing a platform integrated with Canvas LMS to combat the growing student mental health crisis by visualizing academic workload and promoting proactive burnout prevention.",
    date: "November 2025 - Present",
    skills: ["Typescript", "Canvas LMS API", "Chrome APIs"],
    url: "",
  },
  {
    title: "Software Engineer",
    company: "Sustainabli",
    location: "Baltimore, MD",
    description:
      "Work within a tight‑knit startup team to build internal tools and backend systems for our SaaS dashboard, enhancing automation, data reliability, and the product experience delivered to clients.",
    date: "May 2025 - Present",
    skills: ["React.js", "PostgreSQL", "AWS", "Rust"],
    url: "https://www.gosustainabli.com/",
  },
] as const;
