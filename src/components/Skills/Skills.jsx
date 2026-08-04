import "./Skills.css";

import skills from "../../data/skills";


function Skills(){

    return (

        <section className="skills" id="skills">


            <div className="section-container">


                <div className="section-title">

                    <p>My Skills</p>

                    <h2>
                        Technical Skills
                    </h2>

                </div>



                <div className="skills-container">


                    {
                        skills.map((skill,index)=>(

                            <div 
                            className="skill-card"
                            key={index}
                            >


                                <h3>
                                    {skill.category}
                                </h3>


                                <div className="skill-list">


                                    {
                                        skill.items.map((item,i)=>(

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


export default Skills;