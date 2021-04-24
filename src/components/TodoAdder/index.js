import React,{useState} from 'react'


export default(function(props){
    const [inputValue,setInputValue]=useState("None");
    const handlechange=function(e){
        
        // console.log(e.target.value);
        setInputValue(e.target.value);
       
    }
    
    const clicked=function(){
        console.log(inputValue);
        props.callBack(inputValue);
        
        
    }
    return (
    <div>
    
    <input onChange={function(e){handlechange(e)}}/>
    
    
    <button onClick={function(){clicked()}}>Add todo</button>
    </div>
    )
});