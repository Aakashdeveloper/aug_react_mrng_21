import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "http://localhost:8200/booking";

class ViewBooking extends Component {
    constructor(props) {
        super(props);

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    // api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking