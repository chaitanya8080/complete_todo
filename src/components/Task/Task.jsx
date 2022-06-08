import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-testid` key value pair


  return (
    <div className="taskbox">
       <li data-testid="task" className={styles.task}>

      <input type="checkbox" data-testid="task-checkbox" className="circle" />

        
      <div data-testid="task-text">{props.text} </div>
      {/* Counter here */    <Counter count = {props.count}
       handleIncrement={props.handleIncrement}
       handleDecrement={props.handleDecrement}
      ></Counter>}
      <button data-testid="task-remove-button" className="btn">X</button>
    </li>
    </div>
   
  );
};

export default Task;
