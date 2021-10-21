import React from 'react';
import './toDoItems.scss';

const ToDoItems = ({ children, toDoItems, filteredToDos, emptyTodos, notFoundTodo, loading }) => {
    let [ filteredToDosList, isFiltering ] = filteredToDos;

    let loadingArray = () => {
        let loadingArray = [];

        for (let i = 0; i < 4; i++) {
            loadingArray.push({
                todo: '',
                isDone: false,
                id: Math.random() * 10,
            })
        }

        return loadingArray;
    }

    return(
        <main className='todo-items'>
            {
                loading && loadingArray().map(children)
            }
            {
                (!loading) && (isFiltering) && (filteredToDosList.length === 0) && notFoundTodo()
            }
            {
                (!loading) && (toDoItems.length) === 0 && (!isFiltering) && emptyTodos()
            }
            {
                (!loading) && (filteredToDosList.length > 0) && (isFiltering) && filteredToDosList.map(children)
            }
            {
                (!loading) && (!isFiltering) && (toDoItems.length > 0) && toDoItems.map(children)
            }   
        </main>
    );
};

export default ToDoItems;
