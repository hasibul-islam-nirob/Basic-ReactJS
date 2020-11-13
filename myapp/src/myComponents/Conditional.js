import React, {Component} from "react";

class Conditional extends Component{

    constructor() {
        super();
        this.state={
            login:false
        }
    }

    checkLogIn(a){
        this.setState({login:a})
    }

    render() {
        if (this.state.login == true){
            return(
                <div><br/><br/><br/>
                    <button onClick={this.checkLogIn.bind(this,false)} >Log Out</button>
                </div>
            )
        }else{
            return(
                <div><br/><br/><br/>
                    <button onClick={this.checkLogIn.bind(this,true)} >Log In</button>
                </div>
            )
        }
    }


}

export default Conditional;