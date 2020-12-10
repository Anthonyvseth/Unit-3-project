import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList'

export default (props) => {
    const { account, setNeedsRefresh } = props

    return (
        <div>
            <div>
                <div>
                    <TodoList
                     account={account}
                     setNeedsRefresh={setNeedsRefresh}/>
                </div>
                <div>
                    <TodoForm
                     {...props}
                      account={account}
                      setNeedsRefresh={setNeedsRefresh} />
                </div>
                <br></br>
            </div>
        </div>
    );
}