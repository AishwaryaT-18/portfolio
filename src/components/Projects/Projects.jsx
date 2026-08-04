import "./Projects.css";

import projects from "../../data/projects";


function Projects(){

    return(

        <section className="projects" id="projects">


            <div className="section-container">


                <div className="section-title">

                    <p>Projects</p>

                    <h2>
                        My Work
                    </h2>

                </div>



                <div className="projects-container">


                {
                    projects.map((project,index)=>(

                        <div className="project-card" key={index}>


                            <h3>
                                {project.title}
                            </h3>


                            <p>
                                {project.description}
                            </p>


                            <div className="project-tech">

                            {
                                project.tech.map((item,i)=>(

                                    <span key={i}>
                                        {item}
                                    </span>

                                ))
                            }

                            </div>


                        </div>

                    ))
                }


                </div>


            </div>


        </section>

    );

}


export default Projects;