import React from 'react'

export default function ToDoCard(props) {
    const { children , handleDelete, index, handleEdit} = props;
  return (
    <div>
      <li className= 'todoItem'>
            {children}
            <button onClick={() =>{
                handleEdit(index);
            }}>
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={()=>{
                handleDelete(index);
            }}>
            <i class="fa-solid fa-trash"></i> 
            </button>
        </li>
    </div>
  )
}
