import React from 'react'
import ToDoItem from './ToDoItem';

function ToDoList({todo, deleteFunc, onChange}){
    return(
        <div>
            {todo.map((todo)=>{
                return(
                <ToDoItem key={todo.id} todo={todo} deleteFunc={deleteFunc} onChange={onChange}/>
                )
            })}
        </div>
    )
}

export default ToDoList;