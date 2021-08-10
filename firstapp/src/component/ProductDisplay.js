import React from 'react';

const ProductDisplay = () => {
    return(
        <div class="container">
            <div class="media">
                <div class="media-left">
                    <img src="https://i.ibb.co/8BJhgK2/r6xkegcloxgn5eq8owwg.jpg" class="media-object" style={{width:60}}/>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">3M 9004IN Particle Respirator Mask"</h4>
                    <p>Box of 10 masks</p>
                </div>
            </div>
            <hr/>
            <div class="media">
                <div class="media-left">
                    <img src="https://i.ibb.co/fHQ8JY4/kclatp7d9dt0dwgu4zkq.jpg" class="media-object" style={{width:60}}/>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">Vogmask Vector Havoc N99CV Mask Large</h4>
                    <p>Box of 10 masks</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay;