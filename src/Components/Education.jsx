import Edu from '../images/edu3.png';
import './Education.css';
import { education } from './Data';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';


const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="container-fluid Education">
                <h3 data-aos="fade-down" className="d-flex justify-content-center pb-3 pt-5"><strong>Education</strong></h3>
                <div className="row">
                    {
                        education.map((item) => (
                            <div className="col-12 d-flex justify-content-center">
                            <div className="row mx-auto">
                                <div data-aos="fade-right" className="col-auto">
                                    <img src={Edu} className="img-fluid img-icon" alt="Edu Icon"></img>
                                </div>
                                <div data-aos="fade-left" className="col flex-column">
                                    <h5>{item.college}</h5>
                                    <p className="mb-0">{item.degree}</p>
                                    <p>{item.period}</p>
                                </div>
                            </div>
                        </div>))

                    }
                </div>
            </div>
        </>
    );
}

export default Education;