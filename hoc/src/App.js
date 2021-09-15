import React,{Component} from 'react';
import StockList from './stockList';
import UserList from './userList';
import Hoc from './hoc';

const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];
const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ];

const Stocks = Hoc(StockList, StocksData);
const User = Hoc(UserList, UsersData)

class App extends Component {
    render(){
        return(
            <div>
                <Stocks/>
                <User/>
            </div>
        )
    }
}

export default App;