import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
import {useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  // function onDelete(){
  //   console.log("Deleted")
  // }
  let initTodo
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  
  const onDelete = (todo)=>{
    // console.log("deleted " ,todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }


  const addTodo = (title,desc)=>{
    // console.log("addition working");
    let sn = todos.length ? todos[todos.length -1].sn + 1 : 1;
    const mytodo = {
      sn : sn,
      title : title,
      desc : desc,
    }
    setTodos([...todos,mytodo]);
  }


  const [todos,setTodos] = useState(initTodo)
  
  
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <Header title= "Todos List" searchbar = {false}/>
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer />
    </>
  );
}

export default App;
