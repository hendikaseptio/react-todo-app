import React from "react";

function Task({ task, index, markAsDone }) {
  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={() => markAsDone(index)} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.task}
      </span>
    </li>
  );
}

export default Task;
