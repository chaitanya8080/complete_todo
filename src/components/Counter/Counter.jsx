import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  

  // NOTE: do not delete `data-testid` key value pair

   
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={props.handleIncrement}>+</button>
      <span data-testid="task-counter-value">{props.count}</span>
      <button data-testid="task-counter-decrement-button" onClick={props.handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
