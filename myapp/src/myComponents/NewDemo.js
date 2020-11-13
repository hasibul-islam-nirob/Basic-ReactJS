import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class NewDemo extends Component {

    myFunc(){
        var container = document.getElementById("myID");
        var element = <h1>Hy I'm From DOM </h1>

        ReactDOM.hydrate(element, container);
    }



    render() {
        return (
            <div>
                <h1 id="myID">Hasibul Islam Nirob</h1>
                <button onClick={this.myFunc}>Click Hear</button>
            </div>
        );
    }
}

export default NewDemo;