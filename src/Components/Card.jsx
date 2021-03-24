// import image from '../images/sample3.jpg'
import './Card.css'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Card = (props) => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    }, []);
    
    return (
        <>
        <div className="card">
            <img src={props.project.image} className="card-img-top img-fluid card-img" alt="..." />
            <div data-aos="zoom-in" className="card-body">
                <h5 className="card-text">{props.project.title}</h5>
                <p className="card-text">{props.project.tech}</p>
                <button type="button" className="btn"><a target="_blank"  href={props.project.link}>View</a></button>
            </div>
        </div>
        </>
    );
}

export default Card;