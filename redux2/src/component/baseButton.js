import React from 'react';

class BaseButton extends React.Component {

    constructor(){
        super()

        this.state={
            name:''
        }
    }

    onClick = () => {
      this.setState({name:'Some Things'})
    };
  
    render() {
      return (
        <div>
          <button className="base-button" onClick={this.onClick}>
            {this.state.name}
          </button>
        </div>
      );
    }
  }

  export default BaseButton