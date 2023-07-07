import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Nav() {

    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get('/user').then((response) => {
            console.log("RESPONSE HEADER");
            setUser(response.data);

        }).catch((error) => { console.log(error) })
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" className="nav-link">about</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className="nav-link">Register</Link>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>
    )
}
