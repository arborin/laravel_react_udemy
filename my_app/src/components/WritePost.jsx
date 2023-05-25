import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WritePost extends Component {

    state = {
        name: '',
        email: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h1>Write Post</h1>
                <form onSubmit={this.formSubmit}>
                    <label>Name: {this.state.name}</label>
                    <input type='text' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    <br />
                    <label>Email: {this.state.email}</label>
                    <input type='text' onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <br />
                    <button type='submit'>Send</button>
                </form>
            </div>
        )
    }
}
