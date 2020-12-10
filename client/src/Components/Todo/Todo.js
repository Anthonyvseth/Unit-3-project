import React from 'react'
import Button from '../Button'
import { __DeleteTodo } from '../../services/TodoService'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// Import ToDo Update Service
// Import Todo Delete Service

export default (props) => {
    const { todo, setNeedsRefresh } = props
    console.log("TODO props: ", props)

    const deleteTodo = async (e) => {
        console.log("HIT deleteTodo: ", todo)
        try{
            await __DeleteTodo(todo.id)
            setNeedsRefresh(true)
        } catch(error) {
            console.log(error)
        }
    }

    if (todo !== null && todo !== undefined) {
        return (
            <div>
                {todo.description}
                <FontAwesomeIcon 
                className="fas fa-white"
                icon={faTimesCircle}
                onClick={(e) => deleteTodo(e)}
                />
            </div>
        )
    } else {
        return null
    }
}