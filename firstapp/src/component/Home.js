import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            products:JSON,
            filtered:JSON
        }
    }

    /*
        var a = [5,4,6,3,9,6,3]
        a.filter((data)=> {return data>5})
    */
    filterProduct = (userInput) => {
        var output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })
        
        this.setState({filtered:output})
    }

    render(){
        // console.log(this.state.products)
        return(
            <>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filtered}/>
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