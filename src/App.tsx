import React, { FC, useState, ChangeEvent } from "react";
import { ITask } from "./interfaces";
import "./App.css";

const App: FC = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    // THIS TAUGHT HOW TO IMPLEMENT INTERFACES
    const [todo, setTodo] = useState<ITask[]>([]);

    // ADDING VOID TO THE FUNCTION RETURN TYPE NOTED
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = {
            taskName: task,
            deadline: deadline,
        };
        setTodo([...todo, newTask]);
        console.log(todo);
    };

    return (
        <section className="App">
            <div className="header">
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="..."
                        onChange={handleChange}
                        name="task"
                    />
                    <input
                        type="number"
                        placeholder="Deadline (in day)..."
                        onChange={handleChange}
                        name="deadline"
                    />
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todo?.map((task: ITask, key: number) => {
                    return (
                        <li key={key}>
                            {task.taskName} | {task.deadline}
                        </li>
                    );
                })}
            </div>
        </section>
    );
};

export default App;
