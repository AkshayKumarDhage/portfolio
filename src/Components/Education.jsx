import Edu from '../images/edu3.png';
import './Education.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Education = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
            <div className="container-fluid Education">
            <h3 data-aos="fade-down" className="d-flex justify-content-center pb-3 pt-5"><strong>Education</strong></h3>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <div className="row mx-auto">
                        <div data-aos="fade-right" className="col-auto d-flex justify-content-center">
                            <img src={Edu} className="img-fluid img-icon" alt="Edu Icon"></img>
                        </div>
                        <div data-aos="fade-left" className="col d-flex justify-content-center flex-column">
                            <h5>The National Institute of Engineering, Mysuru</h5>
                            <p className="mb-0">Bachelors of Engineering in Information Science</p>
                            <p>2017-2021</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="row mx-auto">
                        <div data-aos="fade-right" className="col-auto d-flex justify-content-center">
                            <img src={Edu} className="img-fluid img-icon" alt="Edu Icon"></img>
                        </div>
                        <div data-aos="fade-left" className="col d-flex justify-content-center flex-column">
                            <h5>The National Institute of Engineering, Mysuru</h5>
                            <p className="mb-0">Bachelors of Engineering in Information Science</p>
                            <p>2017-2021</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="row mx-auto">
                        <div data-aos="fade-right" className="col-auto d-flex justify-content-center">
                            <img src={Edu} className="img-fluid img-icon" alt="Edu Icon"></img>
                        </div>
                        <div data-aos="fade-left" className="col d-flex justify-content-center flex-column">
                            <h5>The National Institute of Engineering, Mysuru</h5>
                            <p className="mb-0">Bachelors of Engineering in Information Science</p>
                            <p>2017-2021</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;