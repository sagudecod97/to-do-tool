import React from 'react';
import './toDoItems.scss';

const ToDoItems = ({ children, toDoItems, filteredToDos }) => {
    let [ filteredToDosList, isFiltering ] = filteredToDos;

    return(
        <main className='todo-items'>
            {
                filteredToDosList.length > 0 && (isFiltering) && filteredToDosList.map(children)
            }
            {
                (!isFiltering) && toDoItems.map(children)
            }   
        </main>
    );
};

export default ToDoItems;
