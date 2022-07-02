import React from "react";
import "./Todo.css";

const Todo = (props) => {
  console.log("props", props);
  console.log(props.tasks);
  return (
    <div className="task">
      {
        //   looping thru the array of tasks and printing the content
        props.tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))
      }
    </div>
  );
};

export default Todo;
