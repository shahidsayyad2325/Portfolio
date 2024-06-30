
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

import profile from "./assets/shahidProfile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import nodeJs from "./assets/techstack/nodeJs1.png"
import expressJs from"./assets/techstack/expressJs1.png"
import mgdb from "./assets/techstack/mgdb.png"
import tailwind from "./assets/techstack/tailwind.png";
// import java from "./assets/techstack/java.svg";
import cpp from "./assets/techstack/cpp.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
// Porject Images
import projectImage4 from "./assets/projects/e_waste_app.jpeg";
import projectImage1 from "./assets/projects/food_app.png";
import projectImage2 from "./assets/projects/shahidPro.png";
import projectImage3 from "./assets/projects/GymPro.png";
import projectImage5 from "./assets/projects/studePro.png";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shahid Sayyad",
  tagline: "I'm a Full Stack Developer",
  img: profile,
  about: ` Hello, my name is Shahid, and I am enthusiastic about designing easy to use user-friendly online apps that give users with a smooth experience.

  I am constantly keen to learn new technology and keep up with industry developments. I am a team person that enjoys working with other engineers to discover innovative solutions to difficult problems.
  
  `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shahid-sayyad-2a074a256/",
  github: "https://github.com/shahidsayyad2325",
  instagram: "https://www.instagram.com/_shahid_sayyad/?hl=en",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Computer Engineering",
    Company: `SVPM'S College of Engineering Malegaon(BK) Baramati.`,
    Location: "Baramati",
    Type: "Full Time",
    Duration: "Pursuing",
  },
  {
    Position: "Higher Secondary Board (HSC)",
    Company: "Radheshyam N Agarwal Technical Institute Of Engineering And Technology Baramati.",
    Location: "Baramati",
    Type: "Full Time",
    Duration: "2021",
    grades:"80.67%"
  },
  {
    Position: "Secondary State Board (SSC)",
    Company: "Radheshyam N Agarwal Technical Institute Of Engineering And Technology Baramati.",
    Location: "Baramati",
    Type: "Full Time",
    Duration: "2019",
    grades:"86.60%"
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  cpp: cpp,
  nodeJs:nodeJs,
  expressJs:expressJs,
  mgdb:mgdb,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Food App",
    image: projectImage1,
    description: `I developed a dynamic Food App using the MERN stack, combining MongoDB, Express, React, and Node.js. This app offers a seamless user experience for browsing menus, placing orders, and managing deliveries.`,
    techstack: "Mongodb, Expressjs, React, Nodejs",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shahidsayyad2325/Food-App",
  },
 
  {
    title: "Student Management System",
    image: projectImage5,
    description: `I developed a PHP-based Student Management System with both frontend and backend capabilities, offering a seamless and user-friendly interface. This comprehensive solution simplifies student data management and enhances administrative efficiency.`,
    techstack: "HTML, CSS, PHP",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shahidsayyad2325/Student-Attendance-System",
  },

  {
    title: "Gym Management System ",
    image: projectImage3,
    description: `I developed a comprehensive Gym Management System using JavaScript for both frontend and backend. This user-friendly solution streamlines member management, class scheduling, and administrative tasks to enhance gym operations.`,
    techstack: "HTML, CSS, JS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shahidsayyad2325/Gym-Attendance-System",
  },
  {
    title: "Portfolio Website",
    image: projectImage2,
    description: `"Explore my dynamic React-powered portfolio website, a showcase of my skills, projects, and personality. With cutting-edge web technologies and responsive design, it ensures a flawless experience across devices. Engage with an immersive interface to delve into my work and easily connect with me. Discover the perfect blend of functionality and aesthetics in this visually captivating online portfolio."`,
    techstack: "HTML, CSS, React",
    previewLink: "https://google.com",
    githubLink: "https://github.com/shahidsayyad2325/Portfolio",
  },
  {
    title: "E-Waste Application",
    image: projectImage4,
    description: `The E-Waste Recycling App is an innovative and user-friendly Android application designed to address the growing concern of electronic waste (e-waste) and promote responsible disposal and recycling practices. This app provides a convenient and eco-conscious solution for individuals and businesses to manage their electronic waste in an environmentally sustainable way.
    project lorem ipsum generator for dummy content`,
    techstack: "Java",
    // previewLink: "https://google.com",
    githubLink: "https://github.com/shahidsayyad2325/E-Waste-Management-System",
  },

];

// Enter your Contact Details here
export const contactDetails = {
  email: "shahidsayyad2324@gmail.com",
  phone: "+91 8623892324",
};
