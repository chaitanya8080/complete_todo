import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  const [newtodo,setNewTodo]=useState("")
  const saveTodo =()=>{
   
 
  fetch("http://localhost:8080/data",{
      method:"Post",
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        id: newtodo.id+1,
        text: newtodo,
        done: false,
        count: 2,
      })
  }).then((res)=>res.json())
  .then((d)=>{setNewTodo([...newtodo,d])

  setNewTodo("")  
})
}

  return (
    <div className={styles.todoForm} >
      <div className="addT">
      <input data-testid="add-task-input" type="text" value={newtodo} onChange={({target})=>setNewTodo(target.value)} />
      <button data-testid="add-task-button" onClick={saveTodo}>+</button>
      </div>
     
    </div>
  );
};

export default AddTask;
