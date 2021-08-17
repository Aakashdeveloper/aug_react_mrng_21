import React, {Component, Fragment}from 'react';
import './Header.css';
class Header extends Component {
    constructor(props){
        super(props)
        console.log(">>>>>inside constructor>>>>")
        this.state={
            title:'ShopKaro',
            userText:'User Text Here'
        }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({userText:event.target.value?event.target.value:'User Text Here'})
        // passing data to home
        this.props.userText(event.target.value)
    }

    render(){
        console.log(">>>>>inside render>>>>")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:20}}>{this.state.userText}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;