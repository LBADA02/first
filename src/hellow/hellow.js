import Age from "../traitments/age";


export default function hellow({prenom,name,age})
{
    
    return (
        <div>
            <h1>Hellow {prenom} {name}</h1>
            <Age age={age}/>
        </div>
        )
}



/*
import React from "react";
import { Component } from "react";
export default class Hellow extends Component { //React.Component
    
    render(){
    //console.log(this)
        return(
                <h1>hellow class {this.props.name}</h1>
                
        
    )}
}
*/