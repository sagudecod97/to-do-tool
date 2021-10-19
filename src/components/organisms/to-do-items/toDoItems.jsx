import React from 'react';
import './toDoItems.scss';

const ToDoItems = ({children,
    toDoItems,   
}) => {
    return(
        <main className='todo-items'>
            {
                toDoItems.map(children)
            }   
        </main>
    );
};

export default ToDoItems;
