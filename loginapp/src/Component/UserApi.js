import React, {Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "https://developerjwt.herokuapp.com/api/auth/users"

class Users extends Component {
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        return(
            <div>
                <UserDisplay userdata={this.state.users}/>
            </div>
        )
    }

    // call api
    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({users:data})
        })
    }
}

export default Users;