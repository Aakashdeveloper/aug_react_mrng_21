import React, {Component} from 'react';
import './Search.css';

const LocationUrl = "https://developerfunnel.herokuapp.com/location";
const HotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props){
        super(props)
        console.log(">>>>inside constructor")
        this.state={
            location:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item)=> {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value);
        const cityId = event.target.value
        fetch(`${HotelUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    render(){
        console.log(">>>>inside render")
        return(
            <div className="imageContainer">
               <div id="logo">
                   D!
               </div>
               <div className="heading">
                   Plan Your Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>------SELECT Your City-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown">
                        <option>------SELECT Your Hotels-----</option>
                    </select>
                </div>
            </div>
        )
    }

    ///on page load we have to call api 
    componentDidMount(){
        console.log(">>>>inside componentDidMount")
        // we get the data and update the state
        fetch(LocationUrl, {method:'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            // set the data in the state
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default Search
