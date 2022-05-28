import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  //let  = 0;
  //let unCompletedTask = 0;
  let unCompletedTask = tasks.filter((task) => !task.done).length;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
       <h1>Todo List</h1>
       <div className={styles.small}>You have <b data-cy="header-remaining-task">{unCompletedTask}</b> of{" "}
      <b data-cy="header-total-task">{tasks.length}</b> tasks remaining.
    </div>
    </div>
  );
};

export default TaskHeader;



