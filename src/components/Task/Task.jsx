import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import remove from "../../assets/remove.svg";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-cy` key value pair
  function toggleTaskStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };

  
  return (
    <li data-cy="task" className={`${styles.task} ${task.done ? styles.done : ""}`}>
      <div  >
        <label className={styles.Checkbox}>
          <input
            type="checkbox"
            data-cy="task-checkbox"
            onChange={toggleTaskStatus}
            checked={task.done}
          />
         
        </label>
      <div data-cy="task-text" 
      className={styles.taskText}> {task.text} 
      </div>
       </div>
      {/* Counter here */}
      <Counter taskId={task.id} count={task.count} updateCount={updateCount} />
      <button data-cy="task-remove-button"
       onClick={() => handleRemoveTask(task.id)}
       title="Remover item"> <img src={remove} alt="remove button text" /></button>
    </li>
  );
};

export default Task;



