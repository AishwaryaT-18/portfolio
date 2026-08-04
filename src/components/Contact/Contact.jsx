import "./Contact.css";

import contact from "../../data/contact";


function Contact(){

    return(

        <section className="contact" id="contact">


            <div className="section-container">


                <div className="section-title">

                    <p>Contact</p>

                    <h2>
                        Get In Touch
                    </h2>

                </div>



                <div className="contact-card">


                    <p>
                        I am open to Software Engineer opportunities.
                        Feel free to connect with me.
                    </p>


                    <div className="contact-details">


                        <a href={`mailto:${contact.email}`}>
                            {contact.email}
                        </a>


                        <p>
                            {contact.phone}
                        </p>


                        <p>
                            {contact.location}
                        </p>


                    </div>



                    <div className="contact-links">


                        <a 
                        href={contact.linkedin}
                        target="_blank"
                        >
                            LinkedIn
                        </a>


                        <a 
                        href={contact.github}
                        target="_blank"
                        >
                            GitHub
                        </a>


                    </div>


                </div>


            </div>


        </section>

    );

}


export default Contact;