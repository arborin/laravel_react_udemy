import './Check.css'
const { Component } = require("react");

class Check extends Component {

    constructor(props) {
        super(props);

        this.state = {
            men: [
                { name: 'nika', age: 34 },
            ],
            username: '',
            phonenumber: '',
            email: ''
        }
    }


    changeData = (e) => {
        let val = e.target.value;
        let name = e.target.name;

        this.setState({
            [name]: val
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log("FORM SUBMIT");
        console.log(this.state);
    }

    render() {



        return (<div className='app'>
            <h1>Hello nikoo</h1>
            <div>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group" style={{ marginTop: "200px" }}>
                        <label>User Name:</label>
                        <input type='text' name="username" onChange={this.changeData}></input>
                        <br></br>
                        <label>Phone number:</label>
                        <input type='text' name="phonenumber" onChange={this.changeData}></input>
                        <br></br>
                        <label>Email:</label>
                        <input type='text' name="email" onChange={this.changeData}></input>
                        <br></br>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default Check;