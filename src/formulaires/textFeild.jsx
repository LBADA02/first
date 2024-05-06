/*export default  function TextFeild(props){
        console.log(props)
    return (
        <>
        
            <label>{props.lable}</label>
            <input type={props.type} name={props.name} placeholder={props.placeholder} />
            <span> {props.children} </span>
        </>
    )
}
*/

import { render } from "@testing-library/react"
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
}