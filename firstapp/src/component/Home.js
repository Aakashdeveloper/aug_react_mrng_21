import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay'

class Home extends Component {

    render(){
        return(
            <>
                <Header/>
                <ProductDisplay/>
                <Footer year="2021" month="August"/>
            </>
        )
    }
}


export default Home;



/*
const Home = () => {
    return(
        <>
            <Header/>
            <ProductDisplay/>
            <Footer/>
        </>
    )
}
*/