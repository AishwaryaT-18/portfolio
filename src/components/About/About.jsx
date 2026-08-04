import "./About.css";
import about from "../../data/about";


function About(){

    return (

        <section className="about" id="about">

            <div className="section-container">

                <div className="section-title">

                    <p>About Me</p>

                    <h2>
                        {about.title}
                    </h2>

                </div>


                <div className="about-content">


                    <div className="about-text">

                        {
                            about.description.map((text,index)=>(

                                <p key={index}>
                                    {text}
                                </p>

                            ))
                        }

                    </div>


                    <div className="about-cards">

                        {
                            about.highlights.map((item,index)=>(

                                <div 
                                    className="about-card"
                                    key={index}
                                >

                                    <h3>
                                        {item.value}
                                    </h3>

                                    <p>
                                        {item.label}
                                    </p>

                                </div>

                            ))
                        }

                    </div>


                </div>

            </div>

        </section>

    );

}


export default About;