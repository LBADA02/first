import { useState } from "react"


export default  function Furms(){
    const [name,setName] = useState('')
    const [age,setAge] = useState('')

    const handleNameInputChange = () =>{
        setName(document.querySelector('#name').value)
    }
    const handleAgeInputChange = () =>{
        setAge(document.querySelector('#age').value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            name,
            age
        })
    }
    return (
        <>
        <form>

        <input type="text" id="name" onChange={handleNameInputChange}  placeholder="Nom"/>
        <input type="number" id="age" onChange={handleAgeInputChange} placeholder="Age"/>
        <input type="submit" onClick={handleSubmit} value="Submit"/>

        </form>
        </>
    )
}





/*
import React from "react"


export default class TextFeild extends React.Component{
    render(){
        return(
            <>
        
            <label>{this.props.lable}</label>
            <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} />
            <span> {this.props.children} </span>
        </>

        )
    }
}*/