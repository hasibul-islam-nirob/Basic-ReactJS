import React, {Component} from 'react';

class FormPart2 extends Component {

    constructor() {
        super();
        this.state={
            username:" "
        }
    }


    ChangeValu=(event)=>{
        var myName = event.target.name;
        var myValue = event.target.value;

        this.setState({[myName]: myValue})
    }

    submitData=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <br/>
                <h4>My First From</h4> <br/>

                <h1>{this.state.username}</h1> <br/>

                <form onSubmit={this.submitData} >
                    <input name="username" onChange={this.ChangeValu} type="text" placeholder="Enter Your Name"/>
                    <input  type="submit" value="Submit"/><br/>
                </form>
            </div>
        );
    }
}

export default FormPart2;