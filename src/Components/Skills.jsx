import './Skills.css';
import {skills} from './Data';
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
                            {
                                skills.map((skill) => (
                                    <li data-aos="zoom-in" className="list-inline-item"> {skill}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;