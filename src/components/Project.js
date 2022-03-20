import React from "react"

const Project = (props)=>{
return (
    <div className="project" id="project" >
        <p>{props.name}</p>
        <p>{props.description}</p>
        <img src = {props.screenshot}/>
        <a href= {props.github}>{props.github}</a>

    </div>
)
}
export default Project;