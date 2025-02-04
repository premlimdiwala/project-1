import React, { useState } from 'react'

function TodoApp() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, { task: task, completed: false }])
            setTask("")
        }
    }

    const toggleTask = (index) => {
        const updatedTask = tasks.map((t, i) =>
            i === index ? { ...t, completed: !t.completed } : t
        );
        setTasks(updatedTask);
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    // const updateTask = (index) => {
    //   setTask(tasks[index].task);
    // }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Todo App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter Your Task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>Add</button>
            </div>
            <ul style={styles.taskList}>
                {tasks.map((t, index) => (
                    <li
                        key={index}
                        style={{
                            ...styles.taskItem,
                            textDecoration: t.completed ? "line-through" : "none",
                            backgroundColor: t.completed ? "#d3ffd3" : "transparent",
                        }}
                    >
                        <span onClick={() => toggleTask(index)} style={styles.taskText}>
                            {t.task}
                        </span>
                        <button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete</button>
                        {/* <button onClick={() => updateTask(index)} style={styles.deleteButton}>Update</button> */}
                    </li>
                ))}
            </ul>
            
        </div>
       
    )
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    header: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#333',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    input: {
        width: '75%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    addButton: {
        width: '20%',
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s',
    },
    addButtonHover: {
        backgroundColor: '#45a049',
    },
    taskList: {
        listStyle: "none",
        padding: 0,
        color : 'black'
    },
    taskItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    },
    taskText: {
        cursor: 'pointer',
        fontSize: '1.1rem',
        flexGrow: 1,
        marginRight: '10px',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    deleteButtonHover: {
        backgroundColor: '#e53935',
    },
};

export default TodoApp;
