import React,{Component} from 'react';


class Refresh extends Component{

    constructor() {
        super();
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(){
        this.forceUpdate();
    }

    render() {
        return(
           <div>
               <h2> Number :  {Math.random()} </h2>
               <button onClick={this.updateValue} > Click For Refresh </button>
           </div>
        );
    }

}

export default Refresh