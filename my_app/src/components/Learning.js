import { Component } from "react";

class Learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                { name: 'mango', weight: 23 },
                { name: 'apple', weight: 15 },
                { name: 'banana', weight: 5 }
            ]
        }
    }

    clickHandler = () => {
        this.setState({
            fruits: [
                { name: '11', weight: 23 },
                { name: '22', weight: 15 },
                { name: '33', weight: 5 }
            ]
        })
        console.log("HELLO LOG");
    }

    render() {
        return <div>
            <h5>Fruits:</h5>
            <button onClick={this.clickHandler}>Click Me</button>
            {this.state.fruits[0].name}
        </div>
    }
}

export default Learning;