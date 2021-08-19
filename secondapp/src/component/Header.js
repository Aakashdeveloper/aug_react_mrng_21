import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const Header = (props) => {
    console.log("header props>>>>",props)
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
                            Developer Funnel
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="developernav">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                </div>
            </nav>

        </>
    )
}

export default withRouter(Header);