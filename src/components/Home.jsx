import './header.css'
import menu from '../assets/menu.png';
import { useState } from 'react';
import './home.css'
import './about.css'
import './project.css'
import myImage from '../assets/myImage.jpg';
import './skills.css'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png'
import JAVSCRIPT from '../assets/javascript.webp'
import REACT from '../assets/react.webp'
import PYTHON from '../assets/python.webp'
import JAVA from '../assets/java.webp'
import C from '../assets/c.png'
import GIT from '../assets/git.png'
import GITHUB from '../assets/github.png'

// list of my teach stack
const techStack = [
    {
        title: "HTML",
        icon: <img className='tech-stack-image' src={HTML} />
    },
    {
        title: "CSS",
        icon: <img className='tech-stack-image' src={CSS} />
    },
    {
        title: "JAVASCRIPT",
        icon: <img className='tech-stack-image' src={JAVSCRIPT} />
    },
    {
        title: "REACT",
        icon: <img className='tech-stack-image' src={REACT} />
    },

    {
        title: "PYTHON",
        icon: <img className='tech-stack-image' src={PYTHON} />
    },

    {
        title: "JAVA",
        icon: <img className='tech-stack-image' src={JAVA} />
    },

    {
        title: "C",
        icon: <img className="tech-stack-image" src={C} />
    },

    {
        title: "git",
        icon: <img className="tech-stack-image" src={GIT}/>
    },

    {
        title: "github",
        icon: <img className='tech-stack-image' src={GITHUB}/>
    }
];
export const Home = () => {

    const [menuBtn, setMenuBtn] = useState(false)
    const handleClick = () => {
        const toggle = !menuBtn;
        setMenuBtn(toggle)
    }
    const [switchMode, setSwitchMode] = useState(false);
    const handleSwitch = () => {
        setSwitchMode(!switchMode)
    }

    return (
        <div className={`main-pagess ${switchMode === true ? "switch" : ""}`}>
            {/* header page */}
            <div className="header">
                <div className="navbar">
                    <div className="nav-left">
                        {/* logo */}

                        {/* name */}
                        <h1>DevPaul</h1>
                    </div>

                    <div className="nav-right">
                        <nav className={`navbar-link navbar-link-menu ${menuBtn === true ? "show" : ""}`}>
                            {/* icon for exit bar */}
                            <button onClick={handleClick}><i className="fa-solid fa-x"></i></button>
                            <ul >
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#project">Project</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="icon-menu" onClick={handleClick}>
                        {/* it will show if thw witdh is 768px */}
                        <img src={menu} alt="menu icon" />

                    </div>
                </div>
                {/* light and dark mode */}
                <div className="swicth-mode-container" onClick={handleSwitch}>
                    <i className={`fa-solid fa-moon ${switchMode === true ? "moon" : ""}`}></i>

                    {/* sun mode */}
                    <i className={`fa-solid fa-sun ${switchMode === true ? "Sun" : ""}`}></i>
                </div>
            </div>
            < div className="hero" id="home">
                <div className="hero-content">
                    <div className="name-content">
                        <p>I'm</p>
                        <h1>John Paul Doromal</h1>
                        <h2>Web Developer</h2>
                        <p>Hello! I'm a Front-End Developer with a passion for coding and strong skills in building web applications.</p>
                    </div>

                    <div className="contact-btn">
                        <button className="hired">Hire me</button>
                        <button className="contact">Contact me</button>
                    </div>
                </div>

                <div className="my-image">
                    {/* this will be my image */}
                    <img src="https://img.freepik.com/premium-vector/robot-with-virtual-reality-head-it_1022901-119287.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>
            </div >


            {/* about page */}
            <div className="about-me" id='about'>
                {/* this will be the center of the page content */}
                <div className="about-section">
                    {/* image container */}
                    <div className="images-container">
                        <img src={myImage} alt="myImage icon" />
                    </div>
                    <div className="about-container">
                        {/* content container */}
                        <div className="title">
                            <h2>about me</h2>
                        </div>
                        <div className="about-content">
                            <p>Hi, I'm John Paul M. Doromal, a student passionate about coding and creating responsive web designs. I am highly motivated and constantly learning all the tech stacks I need to build a successful future in web development. Additionally, I am motivated developer who is continuously learning and improving my skills. I aim to be part of a company where I can contribute to real-world projects while growing professionally and making a positive impact.</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* skill page */}
            <div className="main-page-skills" id='skills'>
                <div className="skills-content">
                    <div className="tech-stack">
                        <div className="skills-title">
                            <h1>WHAT I DO</h1>
                        </div>
                        {techStack.map((value, index) => (
                            <div key={index} className="tech-stack-item">
                                {value.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* project page */}

            <div className="project-main-container" id='project'>

            </div>
        </div>
    )
}