import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
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
                            <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Register</Link></li>
                            <li><Link to="/"><span className="glyphicon glyphicon-log-in"></span> LogIn</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>

        </>
    )
}

export default Header;