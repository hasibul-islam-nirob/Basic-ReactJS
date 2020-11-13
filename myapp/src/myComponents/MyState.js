import React,{Component} from 'react'

class MyState extends Component{

    constructor() {
        super();
        this.state={
                name:"Nirob",
            age:"22"
        }
    }

    chnageValue(a){
        this.setState( {name:a} )
    }

    render() {
        return <div>
            <h1>Name : {this.state.name}</h1><br/>
            <h2>Age : {this.state.age}</h2><br/>

            <button onClick={this.chnageValue.bind(this,"Hasibul Islam Nirob")} >Change Name Value</button>
        </div>
    };
}

export default MyState;