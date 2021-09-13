import React, {Component} from 'react';
const url = "http://localhost:8200/booking";

class PlaceBooking extends Component {
    constructor(props){
        super(props);

        this.state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.hotel_name,
            name:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[0]:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            image:sessionStorage.getItem('img'),
            cost:sessionStorage.getItem('cost')
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (test) => {
        // alert(test)
        console.log(this.state)
        fetch(url,{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        //.then(this.props.history.push('/viewbooking'))
        .then(console.log("order accepted please pay"))
    }

    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    Place Booking
                </div>
                <div className="panel-body">
                    <form method="POST" action="https://developerpayment.herokuapp.com/paynow">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input className="form-control" readOnly name="id" value={this.state.id}/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input className="form-control" readOnly name="hotel_name" value={this.state.hotel_name}/>
                        </div>
                        <div className="form-group">
                            <label>Cost In Inr</label>
                            <input className="form-control" readOnly name="cost" value={this.state.cost}/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleInput}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleInput}/>
                        </div>
                        <button className="btn btn-primary" 
                                type="submit"
                                onClick={this.handleSubmit()}>
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;