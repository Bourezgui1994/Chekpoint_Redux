import React, {useState} from "react";
import {useSelector} from "react-redux";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = () => {
  const tasklist = useSelector((state) => state.TaskReducer.TaskList);
  const [status, setstatus] = useState("all");

  return (
    <div className="list">
      
        <button onClick={() => setstatus("all")}>All </button>
        <button onClick={() => setstatus("done")}>Done </button>
        <button onClick={() => setstatus("undone")}>Undone </button>
      

      {status === "all"
        ? tasklist.map((el) => (
            <Task
              key={el.id}
              description={el.description}
              id={el.id}
              isDone={el.isDone}
            />
          ))
        : status === "done"
        ? tasklist
            .filter((el) => el.isDone)
            .map((el) => (
              <Task
                key={el.id}
                description={el.description}
                id={el.id}
                isDone={el.isDone}
              />
            ))
        : tasklist
            .filter((el) => !el.isDone)
            .map((el) => (
              <Task
                key={el.id}
                description={el.description}
                id={el.id}
                isDone={el.isDone}
              />
            ))}
    </div>
  );
};

export default TaskList;