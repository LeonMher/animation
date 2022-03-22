import React from 'react'
import {useState} from 'react'

function ToDoHeader({add}){

    const [text, setText] = useState("")

    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                add(text)
                setText('')
            }}>
                <input type='text' onChange={(e)=>{
                    setText(e.target.value)
                }} />
                <button>Add</button>
            </form>
        </>
    )
}

export default ToDoHeader;