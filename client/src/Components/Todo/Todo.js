import React from 'react'
import Button from '../Button'
import { __DeleteTodo } from '../../services/TodoService'
// Import ToDo Update Service
// Import Todo Delete Service

export default (props) => {
    const { todo } = props
    console.log("TODO props: ", props)

    const deleteTodo = async (e) => {
        console.log("HIT deleteTodo: ", todo)
        try{
            await __DeleteTodo(todo.id)
            props.history.push('/home')
        } catch(error) {
            console.log(error)
        }
    }

    if (todo !== null && todo !== undefined) {
        return (
            <div>
                {todo.description}
                <button onClick={(e) => deleteTodo(e) }>Delete</button>
            </div>
        )
    } else {
        return null
    }
}