import {useState} from 'react'
import './App.css';
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import Footer from './Footer'
import Box from './Box';

function App() {

  const [todo, setTodo] = useState([

    {
      id: Math.random(), text: "Go to school", isCompleted: false
    },

    {
      id: Math.random(), text: "Find a job", isCompleted: false
    },

    {
      id: Math.random(), text: "Enjoy life", isComplated: false
    }

  ])

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <ToDoHeader add={(text)=>{
        setTodo([
          ...todo, 
          {
            id:Math.random(), text: text, isCompleted: false
          }
        ])
      }} />
      
      <ToDoList todo={todo} deleteFunc={(todos)=>{
          setTodo(todo.filter((t)=> t.id !== todos.id))
      }}
      
        onChange={(newTodo)=>{
            setTodo(todo.map((todos)=>{
              if (todos.id === newTodo.id){
                return newTodo
              }
              return todos
            }))
        }}
      />

      <Footer todo={todo} deleteAll={()=>{
        setTodo(todo.filter((t)=> !t.isCompleted ))
      }}/>

      <Box />
    </div>

    
  );
}

export default App;
