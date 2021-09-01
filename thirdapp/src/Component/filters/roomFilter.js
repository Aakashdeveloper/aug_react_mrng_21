import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist/4?roomtype=1"

class RoomFilter extends Component{
    render(){
        return(
            <div>
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