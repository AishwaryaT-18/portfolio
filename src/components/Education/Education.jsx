import "./Education.css";

import education from "../../data/education";


function Education(){

    return(

        <section className="education" id="education">


            <div className="section-container">


                <div className="section-title">

                    <p>Education</p>

                    <h2>
                        Academic Background
                    </h2>

                </div>


                <div className="education-container">


                    {
                        education.map((item,index)=>(

                            <div className="education-card" key={index}>


                                <h3>
                                    {item.degree}
                                </h3>


                                <h4>
                                    {item.college}
                                </h4>


                                <p>
                                    {item.duration}
                                </p>


                                <span>
                                    {item.score}
                                </span>


                            </div>

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default Education;