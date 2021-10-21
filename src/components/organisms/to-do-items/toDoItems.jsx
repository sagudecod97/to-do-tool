import React from 'react';
import './toDoItems.scss';

const ToDoItems = ({ children, toDoItems, filteredToDos, emptyTodos, notFoundTodo }) => {
    let [ filteredToDosList, isFiltering ] = filteredToDos;

    console.log( isFiltering, filteredToDosList)
    console.log(filteredToDosList.length === 0)
    return(
        <main className='todo-items'>
            {
                (isFiltering) && (filteredToDosList.length === 0) && notFoundTodo()
            }
            {
                (toDoItems.length) === 0 && (!isFiltering) && emptyTodos()
            }
            {
                (filteredToDosList.length > 0) && (isFiltering) && filteredToDosList.map(children)
            }
            {
                (!isFiltering) && (toDoItems.length > 0) && toDoItems.map(children)
            }   
        </main>
    );
};

export default ToDoItems;
