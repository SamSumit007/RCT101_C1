import React from "react";
import TaskApp from "./components/TaskApp";
import tasks from "./data/tasks.json";
import "./App.css";


function App() {
  return <div>
    {/* Code Here */}
  <TaskApp data={tasks} />
  </div>;
}

export default App;







 