import React from 'react';
import './product.css';

const ProductDisplay = (props) => {
    console.log("inside product>>>",props)

    const renderProduct = props.prodData.map((data) => {
        return(
            <div className="media" key={data.id}>
                <div className="media-left">
                    <img src={data.image}className="media-object" style={{width:60}}/>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{data.name}</h4>
                    <p>{data.description}</p>
                    <p>Use:{data.use}</p>
                    <p>Cost: Rs.{data.cost}</p>
                </div>
                <hr/>
            </div>
        )
    })

    return(
        <div className="container">
           {renderProduct}
        </div>
    )
}

export default ProductDisplay;