import React, {Component} from 'react';
import {bindReporter} from "web-vitals/dist/lib/bindReporter";

class FormPart3 extends Component {

    constructor() {
        super();
        this.state={
            fname:" ",
            lname:" ",
            mail:" ",
            mobile:" ",
            massege:" "
        }
    }

    onChangeData=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});


        if (inputName==="fname"){
            var nameValidation = /^([a-zA-Z ]){3,30}$/;
            if (!nameValidation.test(inputValue)) {
                this.setState({fname:"First Name Not Valid"});
            }
        }

        if (inputName==="lname"){
            var nameValidation = /^([a-zA-Z]){3,10}$/;
            if (!nameValidation.test(inputValue)){
                this.setState({lname:"Last Name Not Valid"});
            }
        }

        if (inputName==="mail"){
            var mailValidation = /\S+@\S+\.\S+/;
            if (!mailValidation.test(inputValue)){
                this.setState({mail:"Email Address Not Valid"});
            }
        }

        if (inputName==="mobile"){
            if (!Number(inputValue)){
                this.setState({mobile:"Mobile Number Not Valid"});
            }
        }



    }

    render() {
        return (

            <div>
                <p>First Name : {this.state.fname}</p>
                <p>Last Name : {this.state.lname}</p>
                <p>E-mail : {this.state.mail}</p>
                <p>Mobile : {this.state.mobile}</p>
                <p>Massage : {this.state.massege}</p>

                <form action="">

                        <input onChange={this.onChangeData} name="fname" type="text" placeholder="Enter Your First Name" /><br/>

                        <input onChange={this.onChangeData} name="lname" type="text" placeholder="Enter Your Last Name" /><br/>

                        <input onChange={this.onChangeData} name="mail" type="text" placeholder="Enter Your E-mail" /><br/>

                        <input onChange={this.onChangeData} name="mobile" type="text" placeholder="Enter Your Mobile Number" /><br/>

                       <textarea onChange={this.onChangeData} name="massege" type="text" placeholder="Enter Your Any Massage"></textarea>

                        <br/><input  type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}

export default FormPart3;