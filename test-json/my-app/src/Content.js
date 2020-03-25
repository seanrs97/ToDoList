import React, {Component} from "react";
import data from "./data.json";
const loadedData = JSON.parse(JSON.stringify(data));

class Content extends Component {
    constructor(props){
        super();
        this.state ={
            loadedData
        }
    }   
    render(){
        const propsOne = this.props.firstSub;
        const propsTwo = this.props.secondSub;
        const fuck = loadedData[0]+ "." + `${propsOne}` + "." + `${propsTwo}`;
        const display = Object.values(fuck).map((key) => {
            console.log("THE DATA" ,fuck);
            return (
                 <div className = "my-posts">
                    {key.id}
                    <h3> {fuck.name} </h3>
                    <img src = {fuck.imageSrc}/>
                 </div>
             )
         });
        return (  
            <div>
                <h1> {display} </h1>
            </div>  
        )
    }
}

export default Content;