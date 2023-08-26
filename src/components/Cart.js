import { Component } from "react";
import React from "react";
import "../CSS/Cart.css"


class Cart extends React.Component {

    constructor(){

        super() ;

      
    }

    render(){
        return(
            <div>
                <div className="oorkeIcha">
                    <h1>No Orders Yet...<span>&#128533;</span></h1>
                    
                </div>
            </div>
        )
    }
}

export default Cart ;