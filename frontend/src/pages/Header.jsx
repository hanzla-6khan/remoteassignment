import { Link } from "react-router-dom";



const Header = () => {


    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">



                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                        </ul>

                        <div className="d-flex ms-3">
                            <Link className="btn btn-outline-primary me-2" to='login'>Login</Link>
                            <Link to="signup" className="btn btn-primary" >Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
