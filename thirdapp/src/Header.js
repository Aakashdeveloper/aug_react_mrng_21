import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            userdata:'',
            username:'',
            imgurl:''
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
        if(this.state.userdata.name || sessionStorage.getItem('username') !==null){
            if(this.props.location.search){
                const code = (this.props.location.search).split('=')[1];
                if(code){
                    return(
                        <>
                            <li>
                                <a>
                                    <img src={this.state.imgurl} style={{heigh:50, width:50}}/>
                                    Hi {sessionStorage.getItem('username')}
                                </a>
                            </li>
                        </>
                    )
                }
            }else{
                let data = this.state.userdata
                let outputarray = [data.name,data.email,data.phone,data.role]
                sessionStorage.setItem('userData',outputarray)
                return(
                    <>
                        <li><Link>{this.state.userdata.name}</Link></li>
                        <li><button onClick={this.handleLogout}>LogOut</button></li>
                    </>
                )
            }
            
        }else{
            return(
                <>
                    <li>
                        <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                            Login With Github
                        </a>
                    </li>
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
        if(this.props.location.search){
            const code = (this.props.location.search).split('=')[1];
            if(code){
                let requestedData = {
                    code:code
                };
                fetch('http://localhost:9900/oauth',{
                    method: 'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    var user = data.name;
                    var img = data.avatar_url;
                    sessionStorage.setItem('username',user);
                    this.setState({username:user, imgurl:img})
                })
            }
        }
        else{
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
}


export default withRouter(Header);