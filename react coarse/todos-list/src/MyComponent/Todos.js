import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="text-center my-3">Todos List</h1>
             {props.todos1.map((todo1)=>{
                 return <TodoItem todo = {todo1} key={todo1.sno} onDelete={props.onDelete} />
             }
             )}
            
        </div>
    )
}
