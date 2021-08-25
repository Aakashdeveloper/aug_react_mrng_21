import React, {Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"
class Listing extends Component {
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }
    render() {
        return(
            <div className="row">
                <div className="col-md-2">
                    Filter here
                </div>
                <div className="col-md-10">
                    Content here
                </div>
            </div>
        )
    }

    // call the api to get hotels wrt to trip type 
    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => {console.log(res.data)})
    }
}

export default Listing;