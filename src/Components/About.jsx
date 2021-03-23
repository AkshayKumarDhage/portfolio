import myImg from '../images/blogging.svg';
import './About.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';


const About = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    }, []);

    return (
        <>
            <div className="container-fluid d-flex align-items-center about">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div  data-aos="fade-right" className="col-md-6 col-10 myImg mx-auto">
                                <img src={myImg} className="img-fluid animated" alt="Avatar Image"></img>
                            </div>
                            <div  data-aos="fade-left" className="col-md-6 col-10 d-flex align-items-center justify-content-center flex-column mx-auto">
                                <h3><strong>About Me</strong></h3>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;