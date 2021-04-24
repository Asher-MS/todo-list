import React from "react"
import TodoSingle from "../TodoSingle"
export default(function(props){
    return <ul>
    {props.mytodos.map(function(todo){
      return<TodoSingle todo={todo}/>
        
    })}
    </ul>
    
});