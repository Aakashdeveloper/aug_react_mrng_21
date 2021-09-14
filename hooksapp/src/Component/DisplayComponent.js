import React from 'react';

function DisplayComponent(props){
    
    const renderList = ({mycity}) => {
        if(mycity){
            return mycity.map((item) => {
                return(
                    <div>
                        <h3>{item.city_name}</h3>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>Render List</h2>
                {renderList(props)}
            </center>
        </div>
    )
}

export default DisplayComponent;