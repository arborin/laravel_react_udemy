import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log("FORM SUBMIT");

        axios.post('/login', {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })

    }



    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='offset-md-3 col-md-5' align="center">
                    <form onSubmit={formSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required id="form2Example1" className="form-control" />
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required id="form2Example2" className="form-control" />
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <Link to="/forget">Forgot password?</Link>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        {/* Register buttons */}
                        <div className="text-center">
                            <p>Not a member? <Link to='/register'>Register</Link></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
