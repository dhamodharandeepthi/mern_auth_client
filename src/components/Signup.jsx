import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignup) {
                await axios.post('http://localhost:8000/api/auth/signup', { username, password });
                navigate('/login');
            } else {
                const response = await axios.post('http://localhost:8000/api/auth/login', { username, password });
                localStorage.setItem('token', response.data.token);
                navigate('/profile');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="card-title text-center mb-4">
                            {isSignup ? 'Sign Up' : 'Log In'}
                        </h2>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                {isSignup ? 'Sign Up' : 'Log In'}
                            </button>
                        </form>
                        <button
                            className="btn btn-link mt-3 d-block text-center"
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? 'Already have an account? Log In' : 'No account? Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
