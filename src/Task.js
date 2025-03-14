import React from "react";

function Task({ task, index, markAsDone, removeTask }) {
  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={() => markAsDone(index)} />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.task}
      </span>
      <button style={{ marginLeft: '10px'}} onClick={() => removeTask(index)}>X</button>
    </li>
  );
}

export default Task;
