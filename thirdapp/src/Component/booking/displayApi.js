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
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                console.log(qparams)
                var data = {
                    "status": qparams.split('&')[0].split('=')[1],
                    "date": qparams.split('&')[2].split('=')[1],
                    "bank": qparams.split('&')[3].split('=')[1],
                }
                fetch(`${url}/${qparams.split('&')[1].split('=')[1].split('_')[1]}`,
                {
                    method:'PATCH',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        if(sessionStorage.getItem('userData')){
            axios.get(`${url}?email=${sessionStorage.getItem('userData').split(',')[1]}`)
            .then((res) =>  {this.setState({booking:res.data})})
        }
        ///axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking