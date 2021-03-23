import Card from './Card';
import './Cards.css';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

const Cards = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, []);

    return (
        <>
            <div className="container-fluid Cards">
            <span><h3 data-aos="fade-up"><strong>My Projects</strong></h3></span>
                <div className="row justify-content-around mx-auto">
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                    <div data-aos="fade-up" className="col-lg-3 col-md-4 col-sm-6 col-xs-10">
                        <Card />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Cards;