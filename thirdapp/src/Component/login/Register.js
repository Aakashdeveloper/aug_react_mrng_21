import React, {Component} from 'react';
const url = "https://developerjwt.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor() {
        super()

        this.state={
            name:'',
            email:'',
            phone:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/'))
    }

    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Register
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" value={this.state.name}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" value={this.state.email}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" value={this.state.password} type="password"
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input name="phone" value={this.state.phone}
                        className="form-control" onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-success" 
                    onClick={this.handleSubmit}>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}

export default Register;