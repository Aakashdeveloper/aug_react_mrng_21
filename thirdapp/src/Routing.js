import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './Component/listing/listingApi';
import Details from './Component/details/details'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list/:id" component={Listing}/>
            <Route exact path="/details/:id" component={Details}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;