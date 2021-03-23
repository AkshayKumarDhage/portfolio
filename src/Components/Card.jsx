import image from '../images/sample3.jpg'
import './Card.css'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Card = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
        <div className="card">
            <img src={image} className="card-img-top img-fluid card-img" alt="..." />
            <div className="card-body">
                <p data-aos="zoom-in" className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        </>
    );
}

export default Card;