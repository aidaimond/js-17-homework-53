import React from "react";
interface TaskProps extends React.PropsWithChildren{
  task: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div>
      <div className="tasks">{props.task}</div>
    </div>
  );
};

export default Task;