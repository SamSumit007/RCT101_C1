import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"
              value={newTask}
              onChange={({ target }) => setNewTask(target.value)}
       />
      <button data-cy="add-task-button" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddTask;
