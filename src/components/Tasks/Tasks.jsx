import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import empty from "../../assets/empty.svg";

const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-cy` key value pair

  if (tasks.length > 0) {
  return (
    
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
        
      </ul>
      );
      }
      return (
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <img src={empty} alt="empty task list" />
      <p>
        <b>Empty List</b>
      </p>
      <p>Add a New Task </p>
      </div>
  
  );
};

export default Tasks;
