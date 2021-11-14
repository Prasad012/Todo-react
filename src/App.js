import { useState } from "react";
import './App.css';
import Form from "./componenents/Form";
import TodoList from './componenents/TodoList';
function App() {
  const[inputText,setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  return (
    <div className="App">
     <header>
            <h1>Todo</h1>
        </header>
        <Form 
          inputText={inputText} 
          setTodos={setTodos} 
          todos={todos} 
          setInputText={setInputText}
        />
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
