import React, { useState } from "react";
import Task from "./Task";

function TaskList() {
    const [tasks, setTasks] = useState([
        {task:"Belajar React", isDone: false}, 
        {task:"Belajar React Native", isDone: false}, 
        {task:"Belajar Laravel", isDone: false}
        ]);

    // fungsi tambah task
    const addTask = (task) => {
        setTasks([...tasks, {task, isDone: false}]);
    }

    // fungsi hapus task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, idx) => idx !== index);
        setTasks(updatedTasks);
    }

    const markAsDone = (index) => {
        const updatedTasks = tasks.map((task, idx) =>  
            idx === index ? {...task, isDone: !task.isDone} : task
        );
        setTasks(updatedTasks);
    }
    return (
        <div>   
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} markAsDone={markAsDone} removeTask={removeTask} index={index}></Task>
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