import React, {Component} from 'react';

class Select extends Component {

    constructor() {
        super();
        this.state={
            city1:"Dhaka",
            city2:"Tangail",
            city3:"Mymenshingh",
            city4:"Gazipur",
            city5:"Uttara",
            show:" "

        }
    }

    ChangeValue=(event)=>{
        var seletedvalue = event.target.value;
        this.setState({show:seletedvalue});
    }


    render() {
        return (
            <div>
                <h2>{this.state.show}</h2>
                <select onChange={this.ChangeValue} value={this.state.show} >
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>

                </select>
            </div>
        );
    }
}

export default Select;