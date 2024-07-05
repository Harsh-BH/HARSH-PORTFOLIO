import {
  meta,
  shopify,
  starbucks,
  tesla,
  RH,
  quant_logo,
  spark4ai_logo,
  blockchain_logo,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
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
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  tailwind,
  threejs,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "about", title: "About", path: "/about" },
  { id: "contact", title: "Contact", path: "/contact" },
];

export const projects = [
  {
    name: "Examination System",
    description:
      "The Examination Centre project is a web-based system designed to streamline the creation, management, and attempt of online exams. It features a user-friendly interface for teachers to create tests and manage questions, while students can attempt tests with real-time countdowns and view results.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Harsh-BH/Examination-system",
  },
  {
    name: "Sentiment Analysis for Finance and Stocks",
    description:
      "This project performs sentiment analysis on financial news and social media data to predict stock price movements. By leveraging natural language processing techniques and machine learning algorithms, it aims to identify the sentiment of market-related content and correlate it with stock performance. The goal is to provide insights to support.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "Seaborn",
        color: "pink-text-gradient",
      },
      {
        name: "Sci-kit Learn",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Harsh-BH/Sentiment-Analysis-in-Finance-and-Stocks",
  },
  {
    name: "Customer Segmentation and Recommendation",
    description:
      "This project leverages machine learning techniques to perform customer segmentation in the finance and stock market sectors. By analyzing customer behavior and transaction data, the project identifies distinct customer groups to enable targeted marketing and personalized financial services.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "green-text-gradient",
      },
      {
        name: "Sci-kit Learn",
        color: "green-text-gradient",
      },
      {
        name: "MatplotLib",
        color: "green-text-gradient",
      },
      {
        name: "Seaborn",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Harsh-BH/Customer-Segmentation-and-Recommendation",
  },
];

export const technologies = [
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
    name: "TypeScript",
    icon: typescript,
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
    name: "docker",
    icon: docker,
  },
];

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
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
    imageUrl: html,
    name: "HTML",
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
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
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
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Renew Heat",
    icon: RH,
    iconBg: "#accbe1",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Quant Trainee",
    company_name: "Quant Club (IIT Kharagpur)",
    icon: quant_logo,
    iconBg: "#000000",
    date: "Jan 2021 - Feb 2022",
    points: [
      "As a Quant Trainee at IIT Kharagpur, you engage in advanced quantitative analysis, leveraging mathematical models, statistical techniques, and computational algorithms to analyze financial data and market trends.",
      "Conducting in-depth financial research and developing predictive models to evaluate investment strategies, optimize portfolios, and forecast market movements.",
      "Trainees gain hands-on experience with programming languages like Python and R, and use specialized software and tools for data analysis, machine learning, and financial modeling, enhancing their technical skills in quantitative finance.",
    ],
  },
  {
    title: "AI Geek",
    company_name: "Spark4AI (IIT Kharagpur)",
    icon: spark4ai_logo,
    iconBg: "#000000",
    date: "Jan 2022 - Jan 2023",
    points: [
      " As an AI Geek at Sparrk4 AI Club, you work on innovative AI projects, applying cutting-edge machine learning and deep learning techniques to solve real-world problems. This includes developing intelligent applications and exploring new AI methodologies.",
      "Members gain hands-on experience with leading AI tools and frameworks such as TensorFlow, PyTorch, and Keras. ",
      "The Sparrk4 AI Club provides opportunities for members to interact with industry professionals and academic experts through guest lectures, seminars, and industry-sponsored projects.",
      "The club fosters a collaborative learning environment where members share knowledge, participate in peer-to-peer mentoring, and engage in collaborative projects. ",
    ],
  },
  {
    title: "Member",
    company_name: "Kharagur Blockchain Society (IIT Kharagpur)",
    icon: blockchain_logo,
    iconBg: "#000000",
    date: "Jan 2023 - Present",
    points: [
      "As a Member of the Blockchain Society at IIT Kharagpur, you engage in development of blockchain technology. This includes exploring decentralized applications (dApps), smart contracts, and various blockchain platforms such as Ethereum and Hyperledger.",
      "Members gain hands-on experience through projects and workshops, learning the practical aspects of blockchain and cryptography.",
      "As an experienced member, having written two papers on blockchain technology, you contribute significantly to the society’s research output and help in sharing innovative solutions and research findings with the broader community.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];
