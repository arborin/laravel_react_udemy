import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
    return (
        <nav>
            <ul>
                <Link to="/" class="list">
                    Home
                </Link>
                <Link to="/about" class="list">
                    About
                </Link>
            </ul>
        </nav>
    )
}
