import React from "react";
import "./App.css"
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Tasks from "./components/Tasks/Tasks";



function App() {
  return (<div className="App">
      <TaskHeader></TaskHeader>
     <AddTask></AddTask>
      <Tasks></Tasks>
  
  </div>);

}

export default App;
