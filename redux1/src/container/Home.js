import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionfile';
import DisplayComponent from '../component/displyComponent';

class Home extends Component{
    // call action 
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }
}

// we receive the updated state from store
function mapStateToProp(state){
    return{
        mydata:state.films
    }
}
export default connect(mapStateToProp)(Home);