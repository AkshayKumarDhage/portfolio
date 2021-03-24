import myImg from '../images/blogging.svg';
import './About.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';
import {about} from './Data';


const About = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);

    return (
        <>
            <div className="container-fluid about">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div  data-aos="fade-right" className="col-md-6 col-10 myImg mx-auto">
                                <img src={myImg} className="img-fluid animated" alt="Avatar Image"></img>
                            </div>
                            <div  data-aos="fade-left" className="col-md-6 col-10 d-flex align-items-center justify-content-center flex-column mx-auto">
                                <h3><strong>About Me</strong></h3>
                                <p>{about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;