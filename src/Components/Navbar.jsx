import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="Container-fluid nav_bg">
                <div className="row">
                    <div className="mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav">
                            <div className="container-fluid col-md-10 col-12 justify-content-center">
                                <a className="navbar-brand brand" href="#">AY</a>
                                {/* <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Navbar;