import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        return(
            <h1>Details</h1>
        )
    }

    // call the api to get hotel details
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        console.log(response.data)
        this.setState({hotellist:response.data})
    }
}


export default Details;