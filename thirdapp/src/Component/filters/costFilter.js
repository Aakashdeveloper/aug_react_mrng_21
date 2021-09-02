import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component{
    filterCost = (event) => {
        let cost = (event.target.value).split('-');
        let tripId = sessionStorage.getItem('tripId');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value == ""){
            costUrl = `${url}/${tripId}`
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.roomPerCost(res.data)})

    }
    render(){
        return(
            <div onChange={this.filterCost}>
                <center>Cost Filter</center>
                <div>
                    <label className="radio">
                        <input type="radio" name="filter" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="1000-3000"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="3001-6000"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="6001-9000"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" name="filter" value="9001-12000"/>9001-12000
                    </label>
                </div>
            </div>
        )
    }
}

export default CostFilter;