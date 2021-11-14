import React from "react";
const Form=({setInputText,setTodos,todos,inputText})=>{
    const inputTextHandler=(e)=>{
        setInputText(e.target.value);
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        if(inputText.length==0){
            return alert("Enter something");
        }
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random() * 100}
        ])
        setInputText("");
    }
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
    );
}
export default Form;