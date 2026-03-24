import './header.css'
import menu from '../assets/menu.png';
import { useState, useRef } from 'react';
import './home.css';
import './about.css';
import './project.css';
import myImage from '../assets/myImage.jpg';
import './skills.css';
import { TechStack } from './dataList/data';
import { ProjectImage } from './dataList/data';
import './contact.css';

// import emailjs
import emailjs from "@emailjs/browser";


export const Home = () => {

    const [menuBtn, setMenuBtn] = useState(false)
    const [valuetools, setTools] = useState("")
    const [valueproject, setProject] = useState("") // set first the project to all with if its empty
    const [imagesProject, setImageProject] = useState(null)
    const handleClick = () => {
        const toggle = !menuBtn;
        setMenuBtn(toggle)
    }
    const [switchMode, setSwitchMode] = useState(false);
    const handleSwitch = () => {
        setSwitchMode(!switchMode)
    }

    // handleTools

    const handleTools = (tools) => {
        setTools(tools)
    }

    // handleproject
    const handleProject = (project) => {
        // updater state
        setProject(project)
    }

    const form = useRef()

    const handleimageClick = (image) => {
        setImageProject(image)
    }

    // contact form
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_z9qpns8",
            "template_dniv0jr",
            form.current,
            "OlCb2G4PvUUQggrya"
        )
            .then(() => {
                alert("Message sent successfully!");
            }, (error) => {
                alert("Failed to send message.");
                console.log(error.text);
            });

        e.target.reset();
    };

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
                        <button className="contact"><a href="#contact">Contact me</a></button>
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
                            <p>Hi, I'm John Paul M. Doromal, a student passionate about coding and creating responsive web designs. I am highly motivated and constantly learning all the tech stacks I need to build a successful future in web development. Additionally,I am motivated developer who is continuously learning and improving my skills.I aim to be part of a company where I can contribute to real-world projects while growing professionally and making a positive impact.</p>
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
                            <div className="btn">
                                <button className={valuetools === "langauge" ? "active" : ""} onClick={() => handleTools("langauge")}>Programmimg Langauge</button>
                                <button className={valuetools === "framework" ? "active" : ""} onClick={() => handleTools("framework")}>Frame Work</button>
                                <button className={valuetools === "" ? "active" : ""} onClick={() => handleTools("")}>Show All</button>
                            </div>
                        </div>
                        {TechStack.map((value, index) => (
                            <div key={index} className={`tech-stack-item ${valuetools && value.tools !== valuetools ? 'hidden' : ''}`}>
                                {value.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* project page */}

            <div className="project-main-container" id='project'>
                <div className="button-project">
                    <button className={valueproject === "website-project" ? "showing" : ""} onClick={() => handleProject("website-project")}>Website project</button>
                    <button className={valueproject === "game-project" ? "showing" : ""} onClick={() => handleProject("game-project")}>Game Project</button>
                    <button className={valueproject === "" ? "showing" : ""} onClick={() => handleProject("")}>Show All</button>
                    {/* explanation when you click the button the project will have a value weahther it website-project or game-project or "" */}
                </div>
                <div className="project-container">
                    {valueproject !== "website-project" ? (
                        ProjectImage.map((project, id) => (
                            <div key={id} onClick={handleimageClick} className={`images-project ${valueproject && project.typeProject !== valueproject ? "hidden" : ""}`}>
                                <div onClick={handleimageClick} className={`image ${imagesProject === project.id ? "red" : ""}`}>
                                    {project.img}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='website-error'>Sorry The Website project is not finish yet..</p>
                    )}

                    <div className="selected-images-container">
                        
                    </div>
                </div>
            </div>

            {/* contact pgae */}
            <div className="contact-main-container" id='contact'>
                <div className="contact-container">
                    <section className="contact">
                        <h2>Contact Me</h2>

                        <form ref={form} onSubmit={sendEmail} className="contact-form">

                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                            ></textarea>

                            <button type="submit">Send Message</button>

                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}