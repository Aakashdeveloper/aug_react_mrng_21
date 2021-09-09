import React, {Component} from 'react';
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Profile extends Component {
    constructor(props){
        super(props)

        this.state={
            user:''
        }
    }
    handleLogout = () => {
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your EmailId is {this.state.user.email}</h2>
                    <h2>Your phone is {this.state.user.phone}</h2>
                    <h2>Your Role is {this.state.user.role}</h2>
                </div>
                <button className="btn btn-danger" onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
        )
    }

    // get user info 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers: {
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({user:data})
        })
    }
}

export default Profile;