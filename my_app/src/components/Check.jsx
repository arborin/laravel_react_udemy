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

        const names = [
            { name: 'alex', age: 23 },
            { name: 'nika', age: 32 },
            { name: 'kobi', age: 8 }
        ];

        const items = names.map((item, index) => {
            return (<li key={index}>
                Name: {item.name}, Age: {item.age}
                <button className='btn btn-sm btn-success'>edit</button>
                <button className='btn btn-sm btn-danger'>delete</button>

            </li>)
        })

        return (<div className='app'>
            <h1>Student list</h1>
            <div>
                <ul className='list'>
                    {items}
                </ul>
            </div>
        </div>)
    }
}

export default Check;