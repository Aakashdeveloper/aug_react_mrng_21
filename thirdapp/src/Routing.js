import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Header';
import Footer from './Footer';
import Listing from './Component/listing/listingApi'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/list/:id" component={Listing}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;