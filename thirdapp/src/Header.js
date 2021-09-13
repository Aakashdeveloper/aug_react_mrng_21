import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            userdata:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userData')
        this.props.history.push('/');
        
    }

    conditionalLogin = () => {
        //console.log("conditionalLogin>>>>>>",this.state.userdata.name)
        if(this.state.userdata.name){
            let data = this.state.userdata
            let outputarray = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userData',outputarray)
            return(
                <>
                    <li><Link>{this.state.userdata.name}</Link></li>
                    <li><button onClick={this.handleLogout}>LogOut</button></li>
                </>
            )
        }else{
            return(
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </>
            )
        }
    }

    render(){
        return(
            <>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button className="navbar-toggle" data-toggle="collapse" data-target="#developernav">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                                Developer Hotel
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="developernav">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {this.conditionalLogin()}
                            </ul>
                        </div>
                        
                    </div>
                </nav>

            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
}


export default withRouter(Header);