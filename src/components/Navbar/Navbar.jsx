import "./Navbar.css";

function Navbar() {

    return (
        <header className="navbar">

            <div className="navbar-container">

                <a href="#home" className="logo">
                    Aishwarya.
                </a>


                <nav className="nav-menu">

                    <a href="#about">
                        About
                    </a>

                    <a href="#skills">
                        Skills
                    </a>

                <a href="#experience">Experience</a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#education">
                        Education
                    </a>
                    <a href="#certificates">Certificates</a>

                    <a href="#contact">
                        Contact
                    </a>

                </nav>

            </div>

        </header>
    );

}

export default Navbar;