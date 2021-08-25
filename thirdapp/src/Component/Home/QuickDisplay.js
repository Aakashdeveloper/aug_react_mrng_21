import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to={`/list/${item._id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} Trip With Us.
                                </div>
                            </div>
                            
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">
                Quick Search
            </p>
            <p className="quickSearchSubHeading">
                Discover Trip By Type
            </p>
            <br/>
            {listTrip(props)}
        </div>
    )
}

export default QuickDisplay