import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class ChangeImg extends Component {

    ChangeIMG(){
        var id = document.getElementById("myIMG");
        ReactDOM.findDOMNode(id).src="https://img.freepik.com/free-photo/jasmine-flower-greenery_34266-955.jpg?size=626&ext=jpg" ;
    }

    render() {
        return (
            <div>
                <button onClick={this.ChangeIMG}>Change IMG</button> <br/>
                <img id="myIMG" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131616.jpg?crop=0.630xw:1.00xh;0.186xw,0&resize=640:*" alt=""></img>
            </div>
        );
    }
}

export default ChangeImg;