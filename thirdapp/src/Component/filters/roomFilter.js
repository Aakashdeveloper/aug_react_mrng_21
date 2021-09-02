import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class RoomFilter extends Component{
    filterRoom = (event) => {
        let roomId = event.target.value;
        let tripId = sessionStorage.getItem('tripId');
        let roomUrl;
        if(roomId == ""){
            roomUrl = `${url}/${tripId}`
        }else{
            roomUrl = `${url}/${tripId}?roomtype=${roomId}`
        }
        axios.get(roomUrl)
        .then((res) => {this.props.roomPerType(res.data)})

    }
    render(){
        return(
            <div onChange={this.filterRoom}>
                <center>Room Filter</center>
                <div>
                    <label className="radio">
                        <input type="radio" name="filter" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="1"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="2"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="3"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="4"/>Semi Deluxe Room
                    </label>
                </div>
            </div>
        )
    }
}

export default RoomFilter;