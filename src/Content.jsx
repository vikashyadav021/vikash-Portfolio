// import images
import Hero_person from "./assets/images/Hero/vikash-office.jpg";

import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html-5.png";
import css from "./assets/images/Skills/css-3.png";
import tailwind from "./assets/images/Projects/tailwind-css.svg";

// import nodejs from "./assets/images/Skills/node.png";
// import python from "./assets/images/Skills/python.png";

// import services_logo1 from "./assets/images/Services/logo1.png";
// import services_logo2 from "./assets/images/Services/logo2.png";
// import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "../src/assets/images/Projects/rjTutorial.png";
import project2 from "../src/assets/images/Projects/img2.png";
import project3 from "../src/assets/images/Projects/explore.png";

// import project3 from "./img/img3.png";
// import person_project from "./img/person.png";

import avatar1 from "./img/avatar2.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person1.1.png";
import Hireme_person2 from "./assets/images/Hireme/person2.1.png";

// import icons from react-icons

import { MdArrowForward} from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser, BiWalk} from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#hireme",
      icon: BiWalk,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  hero: {
    title: "Software Developer",
    firstName: "VIKASH",
    LastName: "YADAV",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of experience in web development",
      },
      {
        count: "10+",
        text: "Projects worked in my career",
      },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Structuring seamless digital content.",
        logo: html,
      },
      {
        name: "CSS",
        para: "Styling stunning, responsive interfaces.",
        logo: css,
      },
      {
        name: "JS",
        para: "Empowering interactive websites.",
        logo: js,
      },
      {
        name: "REACT JS",
        para: "Crafting dynamic, modular interfaces.",
        logo: reactjs,
      },
      {
        name: "TAILWIND CSS",
        para: "Efficient styling for polished designs.",
        logo: tailwind,
      },
    ],
    icon: MdArrowForward,
  },

  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "FRONT-END DEVELOPMENT",
        para: "I'm a skilled frontend developer specializing in web development. Using technologies like ReactJs, HTML, CSS, and JavaScript, I create responsive and user-friendly websites.",
        logo: (<lord-icon
          src="https://cdn.lordicon.com/ipbtscff.json"
          trigger="loop"
        ></lord-icon>),
      },
      {
        title: "BACK-END DEVELOPMENT(soon)",
        para: "Empowering your digital infrastructure with robust backend solutions– I specialize in crafting scalable and efficient server-side applications using cutting-edge technologies to ensure seamless functionality and optimal performance.",
        logo: (<lord-icon
          src="https://cdn.lordicon.com/nqhntnqz.json"
          trigger="loop">
      </lord-icon>),
      },
      // {
      //   title: "UI / UX DESIGNING(soon)",
      //   para: "Transforming ideas into visually stunning realities through expert UI/UX design – I specialize in creating intuitive and engaging digital experiences to elevate your brand.",
      //   logo: services_logo2,
      // },
    ],
  },

  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person_project,
    project_content: [
      {
        title1: "RJ Tutorial Website",
        image1: project1,
        title2: "Mini Projects",
        image2: project2,
        title3: "Explore ai hub",
        image3: project3,
      },
      
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY WORK REVIEWS",
    testimonials_content: [
      {
        review:
          "“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, impedit?”",
        img: avatar1,
        name: "Anonymous",
      },
      {
        review:
          "“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, quaerat!”",
        img: avatar2,
        name: "Anonymous",
      },
      {
        review:
          "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa?”",
        img: avatar3,
        name: "Anonymous",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hey! I'm Vikash Yadav, a skilled Frontend Developer specializing in ReactJs. I craft responsive, user-friendly websites using HTML, CSS, and JavaScript. Proficient in Tailwind CSS and React.js, I'm all about bringing creativity and precision to web development. Let's build something amazing together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Take A Coffee & Chat With Me",
    // subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "vikashyadav.cse@gmail.com",
        icon: (
          <lord-icon
            src="https://cdn.lordicon.com/ukwexxlc.json"
            trigger="loop"
          ></lord-icon>
        ),
        link: "vikashyadav.cse@gmail.com",
      },
      {
        text: "+91 9479394072",
        icon: (
          <lord-icon
            src="https://cdn.lordicon.com/amjaykqd.json"
            trigger="loop"
          ></lord-icon>
        ),
        link: "https://wa.me/9479394072",
      },
      {
        text: "Linkedin",
        icon: (
          <lord-icon
            src="https://cdn.lordicon.com/lhwyshcs.json"
            trigger="loop"
          ></lord-icon>
        ),
        link: "https://www.linkedin.com/in/thevikashyadav/",
      },
      {
        text: "Github",
        icon: (
          <lord-icon
            src="https://cdn.lordicon.com/rokunbup.json"
            trigger="loop"
          ></lord-icon>
        ),
        link: "https://github.com/Vikashyadaw",
      },
      {
        text: "Instagram",
        icon: (
          <lord-icon
            src="https://cdn.lordicon.com/wleoetna.json"
            trigger="loop"
          ></lord-icon>
        ),
        link: "https://www.instagram.com/vikashyadav.ai/",
      },
    ],
  },
  Footer: {
    text: "All ©Vikash Yadav Copy Right Reserved 2024",
  },
};



