import React, { useState } from "react";
import { Component } from "react";


export default function Counter({initalisation,pas}){

    const [counter,setCont] = useState(initalisation)  // hooks
    const handClick = () => {
        setCont(counter+pas)
    }
    const handClickReset = () =>{
        setCont(initalisation)
    }
    return(
        <>
            <h1>TIMER</h1>
            <p> Il y a {counter} seconds with function</p>
            <button onClick={handClick}>Incement</button>
            <button onClick={handClickReset}>Reset</button>
        </>
    )
}

/*
export default class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            status : undefined
        }
    }
    
    handClick = () => {
        
            this.setState(
                prevStat=>{
                    return {counter : prevStat.counter+1 }
                }
            )
    }
    handClickReset = () =>{
        this.setState(
            prevStat=>{
                return {counter : 0 }
            }
        )
    }


    
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState(
    //             prevStat=>{
    //                 console.log(prevStat.counter)
    //                 return {counter : prevStat.counter+1 ,state : 'changed'}
    //             }
    //         )
    //     },1000)}
       
    
    render(){return(
        <>
            <h1>TIMER</h1>
            <p> Il y a {this.state.counter} seconds </p>
            <button onClick={this.handClick}>Incement</button>
            <button onClick={this.handClickReset}>Reset</button>
        </>
    )}
}*/