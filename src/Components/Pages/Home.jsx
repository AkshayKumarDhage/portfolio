import Header from "../Header";
import Cards from "../Cards";
import Footer from "../Footer";
import About from "../About";
import Contact from "../Contact";
import Education from "../Education";
import Skills from "../Skills";

const Home = () => {
    return (
        <>
            <Header/>
            <About/>
            <Education/>
            <Skills/>
            <Cards />
            <Contact/>
            <Footer />
        </>
    );
}

export default Home;