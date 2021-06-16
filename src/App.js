import React from "react";
import AddTask from "./Component/AddTask/AddTask";
import TaskList from "./Component/TaskList/TaskList";
import "./App.css";


const App = () => {
  return (
    
      <div className="App">
       <h1>TODO APPLICATION</h1>
   
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;