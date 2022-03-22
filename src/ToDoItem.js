import React from 'react'

function ToDoItem({todo, deleteFunc, onChange}){

   

    return(
        <div>

            <input type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                    onChange({
                        ...todo, 
                        isCompleted: e.target.checked
                    })
            }}/>

            


                {todo.text}
            <button onClick={()=>{deleteFunc(todo)}}>X</button>
        </div>
    )
}

export default ToDoItem;