import "./Hero.css";

import profile from "../../data/profile";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-container">

                <div className="hero-content">

                    <p className="hello">
                        Hello, I'm
                    </p>

                    <h1>
                        {profile.name}
                    </h1>

                    <h2>
                        {profile.role}
                    </h2>

                    <p className="tagline">
                        Java | Spring Boot | React | PHP | MySQL
                    </p>

                    <p className="description">
                        {profile.description}
                    </p>

                    <div className="hero-buttons">

                        <a
                            href="/Aishwarya_T_Software_Engineer.pdf"
                            download
                            className="resume-btn"
                        >
                            Download Resume
                        </a>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </div>

                <div className="hero-image-container">

                    <div className="circle-bg"></div>

                    <img
                        src={profile.image}
                        alt={profile.name}
                        className="profile-img"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;