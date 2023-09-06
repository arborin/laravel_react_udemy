import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    componentDidMount() {
        // RUN ONCE
        document.title = `Clicked ${this.state.count}`;
    }

    componentDidUpdate() {
        // Update
        document.title = `Clicked ${this.state.count}`;
    }



    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>

            </div>
        )
    }
}
