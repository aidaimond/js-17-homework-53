import React from "react";

interface AddTaskFormProps extends React.PropsWithChildren {
  addTask: string;
}

const Task: React.FC<AddTaskFormProps> = props => {
  return (
    <form>
      <input value={props.addTask} type="text"/>
    </form>
  );
};