import "./Certificates.css";
import certificates from "../../data/certificates";

function Certificates() {

    return (

        <section className="certificates" id="certificates">

            <div className="section-container">

                <div className="section-title">

                    <p>Certificates</p>

                    <h2>Certifications & Training</h2>

                </div>

                <div className="certificate-container">

                    {
                        certificates.map((item, index) => (

                            <div className="certificate-card" key={index}>

                                <h3>{item.title}</h3>

                                <p>{item.issuer}</p>

                                <span>{item.year}</span>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default Certificates;