import React from "react";
import styles from "./tasks.module.css";
import { useState,useEffect } from "react";
import Task from "../Task/Task";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
   
  const [todo,setTodo]=useState([])
  const [page,setPage]=useState(1)
  const [count, setCount] = useState(0)

  
  const handleIncrement =()=>{
    setCount(count+1);
}
const handleDecrement =()=>{
  if(count>1){
  setCount(count-1);
  }
}

  useEffect(()=>{
  
   //not calling again & again   //?_page=1&_limit=3
    fetch(`http://localhost:8080/data?_page=${page}&_limit=3`)
    .then((res)=>res.json())
    .then((data)=>{setTodo(data)})
   
},[page])
     console.log(todo)
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks }>
        {/* Task List */}
        
        {todo.map((e)=>(
          <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>
             <Task text={e.text} id={e.id} count={e.count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              
              ></Task>
              {/* <h4>{e.id}</h4> */}
              <h4></h4>

          </div>
        
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
      <h3>{page}</h3>
    <button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
    <button onClick={()=>setPage(page+1)}>Next</button>
    </>
  );
};

export default Tasks;
