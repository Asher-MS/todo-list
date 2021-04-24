import React,{useState} from 'react'

export default(function(props){
    const [isDone,setIsDone]=useState(false);
    return <li>
            {isDone?(<><strike>{props.todo}<button onClick={function(){setIsDone(false)}}>Not Done</button></strike></>):(<>{props.todo}<button onClick={function(){setIsDone(true)}}>done</button></>)}
            </li>
});