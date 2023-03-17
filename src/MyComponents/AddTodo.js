import React from 'react'
import { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be empty");
        }else{
            addTodo(title,desc);
            settitle(()=>{
                return ""
            })
            setDesc(()=>{
                return ""
            })
        }
    }
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange = {(e)=>{settitle(e.target.value)}} className="form-control" id="title" placeholder="Enter title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value = {desc} onChange = {(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
