import logo from './logo.svg';
import './App.css';
import TodoWrapper from "./components/TodoWrapper/index.js"
import { useState } from 'react';
import TodoAdder from "./components/TodoAdder/index.js"
import Heading from "./components/Heading"
function App() {
  var [todos,setTodos]=useState([
  "Eat",
  "Sleep",
  "Repeat",
]);

const addTodoCallBack=function(todo){
  setTodos([...todos,todo]);

}



  return (
    
    <div >
      <Heading />
      <TodoAdder callBack={addTodoCallBack}/>
      <TodoWrapper mytodos={todos} />
      
    </div>
  );
}

export default App;


// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>