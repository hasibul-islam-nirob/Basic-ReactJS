import React, {Component} from 'react';

class FromPart1 extends Component {

    constructor() {
        super();
        this.state={
            name:" "
        }
    }


    ChangeValu=(event)=>{
      var myName = event.target.value;
      this.setState({name:myName})
    }

    render() {
        return (
            <div>
                <br/>
                <h4>My First From</h4> <br/>

                <h1>{this.state.name}</h1> <br/>

                <form action="">
                    <input onChange={this.ChangeValu} type="text" placeholder="Enter Your Name"/>
                    <input  type="submit" value="Submit"/><br/>
                </form>
            </div>
        );
    }
}

export default FromPart1;