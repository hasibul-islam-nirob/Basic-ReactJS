import React from 'react'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AlrtMe = (a)=>{
    alert(a);
}

const Arrow = ()=>{
    return(
        <button onClick={AlrtMe.bind(this,"I'm From Arrow Function")} className="btn btn-success m-5 p-3">I'm From Arrow Function Button</button>
    );
}

export default Arrow;