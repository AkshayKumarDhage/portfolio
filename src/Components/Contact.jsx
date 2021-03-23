import './Contact.css';
import whatsapp from '../images/whatsapp2.png'
import mail from '../images/gmail.png';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
            <div className="container-fluid contact">
                <h3 data-aos="fade-up" className="d-flex justify-content-center"><strong>Contact Me</strong></h3>
                <div className="row mx-auto d-flex justify-content-center align-items-center contact-details">
                    <div data-aos="fade-up" className="col-md-3 col-10">
                        <div className="d-flex justify-content-center pb-2 zoom">
                            <img src={whatsapp} className="icon"></img>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p >Whatsapp: +919900990099</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 col-10">
                        <div className="d-flex justify-content-center pb-2 zoom">
                            <img src={mail} className="icon"></img>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p >Mail: ay1234567@gmail.com</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 col-10">
                        <div className="d-flex justify-content-center pb-2 zoom">
                            <img src={linkedin} className="icon"></img>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p>Linkedin: Linkedin.com/in/ay</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-md-3 col-10">
                        <div className="d-flex justify-content-center pb-2 zoom">
                            <img src={github} className="icon"></img>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p>Github: github.com/ay</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;