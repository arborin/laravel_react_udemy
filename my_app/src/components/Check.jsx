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
            email: '',
            usernameError: ''
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
        if (this.validate()) {
            console.log("VALIDATION DONE");
        }
    }

    validate() {
        if (!this.state.username) {
            this.setState({ usernameError: "USERNAME IS EMPTY" })
        } else {
            this.setState({ usernameError: "" })
            return true;
        }
    }

    render() {



        return (<div className='app'>
            <h1>Hello nikoo</h1>
            <div>
                <form onSubmit={this.formSubmit}>
                    <div className="form-group" style={{ marginTop: "200px" }}>
                        <label>User Name:</label>
                        <input type='text' name="username" onChange={(e) => { this.setState({ username: e.target.value }) }}></input>
                        <strong style={{ color: 'red' }}>{this.state.usernameError}</strong>
                        <br></br>
                        <label>Phone number:</label>
                        <input type='text' name="phonenumber" onChange={(e) => { this.setState({ phonenumber: e.target.value }) }}></input>
                        <br></br>
                        <label>Email:</label>
                        <input type='text' name="email" onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                        <br></br>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>)
    }
}

export default Check;