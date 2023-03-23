"use client"
import React, { useState } from 'react'

export default function ToDo() {
    
    const [ptodo, setATodo] = useState ('')

  const [todo, setTodo]  = useState([
    {todoText: "hello", compeleted: false},
    {todoText: "world", compeleted: true},
    {todoText: "welcome",compeleted: false},
    {todoText: "new", compeleted: true}
    ])
    
const onClickHandler = (gelm: any) => {
    console.log(gelm)
//map runs on an array, and retuens an array
    const newTodos = todo.map((ptodo) => {
        console.log(ptodo)
        if (ptodo.todoText == gelm.todoText){
            ptodo.compeleted =! ptodo.compeleted
        }
        return ptodo
    })
    console.log(newTodos)
    setTodo(newTodos)
}

const AddTodo = () => {
    const newTodo = {todoText: ptodo, completed: false}
    const newTodos = [...todo, newTodo]
    setTodo(newTodos)
    setATodo("")
}

const deleteTodo = (gelm: any) => {
    const newTodos = todo.filter(ptodo=>{
    if (ptodo.todoText == gelm.todoText)
        return false
       return true
    })
    setTodo(newTodos)
}

  return ( 
    <>
    <div style={{padding: "70px"}}>
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <br/>
    <input placeholder="Add text here" value={ptodo} onChange={(e) => {setATodo(e.target.value)}}/>
    
    <button onClick={AddTodo}>Add</button>
    <ul>
        {todo.map ((elm) => {
        return <li style={{color: elm.compeleted ? "green" : "red", listStyle: "none"}} 
        key={elm.todoText}>
            
            <input type="checkbox" 
            checked={elm.compeleted} 
            onChange={()=>{onClickHandler(elm)}} 
            />  
             {elm.todoText}
             <button style={{margin: "50", display: "inline-block"}}
             onClick={()=>{deleteTodo(elm)}}>
                {" "}
                Delete
                </button>
             </li>
        })}
    </ul>
    </div>  
    </>
  )
}
