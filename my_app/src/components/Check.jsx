import './Check.css'
const { Component } = require("react");

class Check extends Component {

    constructor(props) {
        super(props);

        this.state = {
            age: ''
        }
    }






    render() {

        const names = ['alex', 'nika', 'kobi'];

        const items = names.map((item, index) => {
            return <li key={index}>{item}</li>
        })

        return (<div className='app'>
            <h1>Student list</h1>
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        </div>)
    }
}

export default Check;