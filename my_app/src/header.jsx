import { Component } from "react";
import { Link } from 'react-router-dom'

export default class header extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="test">DDD</Link></li>



                </ul>
            </div>
        )
    }
}