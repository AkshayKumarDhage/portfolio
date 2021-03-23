import './Skills.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Skills = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
            <div className="container-fluid skills">
                <h3 className="d-flex justify-content-center pt-5 pb-2"><strong>Skills</strong></h3>
                <div className="row justify-content-center mx-auto">
                    <div className="col-8 pb-5 d-flex justify-content-center">
                        <ul className="list-inline">
                            <li data-aos="zoom-in" className="list-inline-item"> Python</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Java</li>
                            <li data-aos="zoom-in" className="list-inline-item"> C++</li>
                            <li data-aos="zoom-in" className="list-inline-item"> JavaScript</li>
                            <li data-aos="zoom-in" className="list-inline-item"> MySql</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Java Spring Boot</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Python Flask Framework</li>
                            <li data-aos="zoom-in" className="list-inline-item"> NodeJS</li>
                            <li data-aos="zoom-in" className="list-inline-item"> ReactJS</li>
                            <li data-aos="zoom-in" className="list-inline-item"> MongoDB</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Web Development</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Backend Development</li>
                            <li data-aos="zoom-in" className="list-inline-item"> RestAPI</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Machine Learning</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Data Structures</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Algorithms</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Object Oriented Programming</li>
                            <li data-aos="zoom-in" className="list-inline-item"> Operating Systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;