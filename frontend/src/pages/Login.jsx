import { useState } from 'react';
import '../styles/login.css';
import logo from "../assets/logo.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();


        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password,
            });


            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Login successful:', response.data);

                navigate('/dashboard');
            } else {
                setError('Token not found in response.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="container-fluid mt-4 login-container">
                <div className="row">
                    <div className="col-md-6 login-form">
                        <i className="fa fa-backward" aria-hidden="true">
                            <a href="#" className="back-link">Back</a>
                        </i>

                        <div className="form-container">
                            <h2 className="text-danger">Log In</h2>
                            <p>Enter your email and password to sign in!</p>

                            <div className="d-flex align-items-center">
                                <hr className="flex-grow-1" />
                                <span className="px-2 text-muted">or</span>
                                <hr className="flex-grow-1" />
                            </div>

                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input
                                        type="email"
                                        className="form-control custom-input"
                                        placeholder="mail@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control custom-input"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="form-check d-flex align-items-center">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label custom-input">Keep me logged in</label>
                                    <a href="#" className="ml-auto">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn btn-danger w-100 mt-3" disabled={isLoading}>
                                    {isLoading ? 'Logging in...' : 'Sign In'}
                                </button>
                            </form>
                            <p className="mt-3">
                                Not registered yet? <a href="#">Create an Account</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 brand-section pt-5 text-white d-flex flex-column align-items-center justify-content-center">
                        <div className="brand-logo mb-3 d-flex align-items-center justify-content-center pl-4">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <img src={logo} alt="Spark Logo" className="img-fluid" />
                                </div>
                                <div className="col">
                                    <h1 className="ml-2 border border-white rounded p-2">Spark</h1>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 align-items-center border border-white p-2 rounded justify-content-center">
                            <p className="mb-0 pr-2">Learn more about Air Drive on</p>
                            <p className="m-auto text-center">
                                <a href="#" className="text-white text-decoration-none">Spark.pl</a>
                            </p>
                        </div>

                        <div className="footer-links mt-auto d-flex justify-content-center">
                            <a href="#" className="text-white mx-2">License</a>
                            <a href="#" className="text-white mx-2">Terms of Use</a>
                            <a href="#" className="text-white mx-2">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
