import video1 from '../videos/video-2.mp4'
import './Header.css';
import {resumeLink} from './Data';

const Header = () => {
    return (
        <>
            <div className="Container header">
                <div className="row">
                    <div className="mx-auto">
                        <video src={video1} autoPlay loop muted />
                    </div>
                </div>
                <div className="container vh-100 vw-100 d-flex justify-content-center align-items-center">
                    <div >
                        <h1>I am Akshay Kumar Dhage</h1>
                        <h3>I am Software Engineer.</h3>
                        <button className="btn bg-transparent"><a target="_blank" href={resumeLink}>My Resume ➜</a></button>
                        <div className="scroll"> <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;