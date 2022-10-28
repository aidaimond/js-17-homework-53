import React from "react";

interface AddTaskFormProps extends React.PropsWithChildren {
  addTask: React.MouseEventHandler;
  onAddTask?: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <div className="inputDiv">
      <input className="inputTask" placeholder="Add new task" onChange={props.onAddTask}/>
      <button className="add" onClick={props.addTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;