import React, { useState } from 'react'
import './TodoList.css'
import { useForm } from 'react-hook-form'
export default function TodoList({addTodo}) { 
  const [todos, setTodos] = useState({task:"",description:""})
  const {register , handleSubmit , formState:{errors}} = useForm()
    const handlerChange =(e) =>{
        setTodos(currTodos => {
            return {
                ...currTodos,
                [e.target.name] : e.target.value
            }
        })
    }

    const sendData =() =>{
        addTodo(todos)
        setTodos({task:"",description:""})
    }
   
  return (
    <div className='TodoList'>
        <h1>New Task</h1>
        <h2>Task: {todos.task} Description: {todos.description}</h2>
        <form >
          <input type="text" {...register('task', {required:'This field is must be filled'})} placeholder="Your Task" value={todos.task} onChange={handlerChange}/>
          {errors.task && <span style={{color:"red"}}>{errors.task.message}</span>}
          <textarea {...register("description", {required:'This field is must be filled', minLength:{value:4, message:'Min length is 4'}})} placeholder='Describe it' value={todos.description} onChange={handlerChange}></textarea>
          {errors.description && <span style={{color:"red"}}>{errors.description.message}</span>}
          <button onClick={handleSubmit(sendData)}>Add</button>
        </form>
    </div>
  )
}
