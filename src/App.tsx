import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTAskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {task: 'Buy milk', id: '123'},
    {task: 'Walk with dog', id: '234'},
    {task: 'Do homework', id: '345'},
  ]);

  const [current, setCurrent] = useState([
    {task: '', id: ''},
  ]);

  const currentTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentsCopy = [...current];
    const currentCopy = {...current[0]};
    const newId = new Date().toString();
    currentCopy.task = event.target.value;
    currentCopy.id = newId;
    currentsCopy[0] = currentCopy;
    setCurrent(currentsCopy);
  }

  const addTask = () => {
    const newTasks = [...tasks, current[0]];
    setTasks(newTasks);
  }

  const deleteTask = (id: string) => {
    const index = tasks.findIndex(t => t.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  return (
    <div className="App">
      <AddTaskForm
        addTask={addTask}
        onAddTask={currentTask}
      >
      </AddTaskForm>
      <div>
        {tasks.map((task) => {
          return (
            <Task key={task.id} task={task.task} delete={ () => deleteTask(task.id)}/>
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
