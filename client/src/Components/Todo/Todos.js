import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList'

export default (props) => {
    const { account } = props

    return (
        <div>
            <div>
                <div>
                    <TodoList account={account}/>
                </div>
                <div>
                    <TodoForm account={account} />
                </div>
                <br></br>
            </div>
        </div>
    );
}