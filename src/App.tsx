import React, {useState} from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([
    {task: 'Buy milk', id: '123'},
    {task: 'Walk with dog', id: '234'},
    {task: 'Do homework', id: '345'},
  ]);

  return (
    <div className="App">

    </div>
  );
};

export default App;
