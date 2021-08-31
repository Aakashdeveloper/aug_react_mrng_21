import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './Component/listing/listingApi';
import Details from './Component/details/details';
import PlaceBooking from './Component/booking/placeBooking';
import ViewBooking from './Component/booking/displayApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list/:id" component={Listing}/>
            <Route exact path="/details/:id" component={Details}/>
            <Route exact path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route exact path="/viewbooking" component={ViewBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;