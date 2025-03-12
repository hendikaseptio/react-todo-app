import React from "react";
import Task from "./Task";

function TaskList() {
    const tasks = ['Belajar React', 'Belajar React Native', 'Belajar Laravel'];

    return (
        <ul>
            {tasks.map((task, index) => (
                <Task key={index} task={task}></Task>
            ))}
        </ul>
    )
}

export default TaskList;