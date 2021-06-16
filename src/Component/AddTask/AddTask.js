import React, {useState} from "react";
import "./AddTask.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../Redux/Actions/Task";

const AddTask = () => {
  const dispatch = useDispatch();
  const [Taskvalue, setTaskvalue] = useState("");
  return (
    <div className="addTask">
      <h3>Add Task</h3>
      <input onChange={(e) => setTaskvalue(e.target.value)} value={Taskvalue}  
      onKeyDown={e => e.key === 'Enter' }/>
      <button onClick={() => { if (Taskvalue) { dispatch(
              addTask({
                id: Math.random(),
                description: Taskvalue,
                isDone: false,
              })
            );
            setTaskvalue("");
          } else {
            alert("Sorry this is an empty task !!");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;