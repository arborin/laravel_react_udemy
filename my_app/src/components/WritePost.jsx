import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WritePost extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h1>Write Post</h1>
                <form>
                    <label>Name:</label>
                    <input type='text' />
                    <br />
                    <label>Email:</label>
                    <input type='text' />
                </form>
            </div>
        )
    }
}
