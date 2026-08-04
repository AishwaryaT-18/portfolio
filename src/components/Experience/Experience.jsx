import "./Experience.css";

import experience from "../../data/experience";


function Experience(){

    return(

        <section className="experience" id="experience">


            <div className="section-container">


                <div className="section-title">

                    <p>Experience</p>

                    <h2>
                        Professional Experience
                    </h2>

                </div>



                <div className="experience-container">


                    {
                        experience.map((item,index)=>(

                            <div className="experience-card" key={index}>


                                <h3>
                                    {item.role}
                                </h3>


                                <h4>
                                    {item.company}
                                </h4>


                                <span>
                                    {item.duration}
                                </span>


                                <ul>

                                    {
                                        item.points.map((point,i)=>(

                                            <li key={i}>
                                                {point}
                                            </li>

                                        ))
                                    }

                                </ul>


                            </div>

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default Experience;