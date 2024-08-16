// import React from 'react'

import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
    const { todos }= props;
    // let todos= [
    //     'Go gym',
    //     'Buy groceries',
    //     'Clean house',
    //     'Cook dinner'
    // ];
  return (
    <ul className="main">
      {todos.map((todo, index) => (
            <ToDoCard  {...props} key={index} index={index}>
                <p>{todo}</p>
            </ToDoCard>  
        ))}
    </ul>
  )
}


