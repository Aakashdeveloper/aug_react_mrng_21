import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <>
            <h1 style={{textAlign:'center'}}>Routing</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            <hr/>
        </>
    )
}

export default Header;