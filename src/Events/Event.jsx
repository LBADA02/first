export default function Event(){
    const handelClick = () => {
        console.log(this)
        alert('Boom !!')
    }
    return (
    <div>
        <button onClick={handelClick}>
            click
        </button>
        <input onKeyUp={handelClick} />
    </div>
    )
}


/*
import { Component } from "react";

export default class Event extends Component{
    handelClick = () =>
    {
        console.log(this)
        alert('Boom !!')
    }; 
    render(){
        return (
        <div>
            <button onClick={this.handelClick}>
                click
            </button>
            <input onKeyUp={this.handelClick} />
        </div>
        )
    }
}*/