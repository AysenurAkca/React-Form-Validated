import React,{useState} from 'react'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'
export default function TodoListPage() {
    const [todos, setTodos] = useState([
        {task:"go to market", description:"I need to take some vegatables", id:uuid()},
        {task:"make my bed", description:"for feel better",id:uuid()}
    ])

    const addTodo =(newThing) => {
        setTodos(currTodo=>{
            return [...currTodo,
                {...newThing,id:uuid()}
            ]
        })
    }
    const deleteTask =(id)=>{
        setTodos((currTodo)=>currTodo.filter(todo=> id!== todo.id))
    }
  return (
    <div>
    <TodoList addTodo={addTodo}/>
        {todos.map(todo =>{
        return <p key={todo.id}><strong>{todo.task}</strong> - {todo.description} <button onClick={()=>deleteTask(todo.id)}>Done</button>
        </p>
    })}
    
    </div>
  )
}
