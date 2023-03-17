import React from 'react'
import TodoItem from './TodoItem'
import { useState } from 'react'
const Todos = (props) => {
  let mystyle = {
    minHeight : "70vh"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className= "text-center">Todos List</h3>
      {props.todos.length ? props.todos.map((todo) => {
        return (<>
        <TodoItem  todo = {todo}  key = {todo.sn} onDelete = {props.onDelete}/> <hr/>
        </>);
      }):"No Todos"}
    </div>
  )
}

export default Todos

// Todos.defaultprototype = {
//   todos : [null]
// }