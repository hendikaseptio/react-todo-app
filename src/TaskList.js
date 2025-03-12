import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
    const [tasks, setTasks] = useState(['Belajar React', 'Belajar React Native', 'Belajar Laravel']);

    // fungsi tambah task
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    return (
        <div>   
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task}></Task>
                ))}
            </ul>
            <AddTaskForm addTask={addTask} />
        </div>
    )
}

function AddTaskForm({ addTask }) {
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newTask.trim() !== '') {
            addTask(newTask);
            setNewTask('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Tambah Tugas Baru" />
            <button type="submit">Tambah</button>
        </form>
    )
}

export default TaskList;