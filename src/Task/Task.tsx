import React from "react";
interface TaskProps {
  task: string;
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div>
      <div>{props.task}</div>
    </div>
  );
};