import React, {Component} from 'react';

class ArrayList extends Component {


    render() {

        const myArray = ['Dhaka','Sylhet','Tangail','Tongi','Uttara'];
        const dataItem = myArray.map((myData)=>{
                    return <option>{myData}</option>
            })

        return (
            <div>
                <select name="" id="">
                    {dataItem}
                </select>
            </div>
        );
    }
}

export default ArrayList;