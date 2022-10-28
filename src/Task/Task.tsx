import React from "react";
interface TaskProps extends React.PropsWithChildren{
  task: string;
  delete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div>
      <div className="tasks">{props.task}</div>
      <button className="remove" onClick={props.delete}></button>
    </div>
  );
};

export default Task;