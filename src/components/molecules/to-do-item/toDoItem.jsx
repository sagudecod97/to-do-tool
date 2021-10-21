import React from 'react';
import './toDoItem.scss';

const ToDoItem = ({ content, id, deleteToDo, setIsDone, isDone, loading }) => {
    const deleteToDoHandler = () => {
        deleteToDo(id)
    };

    const setIsDoneHandler = () => {
        setIsDone(id);
    }

    return(
        <div
        className={`todo-item ${isDone ? '--done': ''} ${loading ? '--loading-item' : ''}`}
        >
            <p className='todo-item__content'>{content}</p>
            <button
            onClick={deleteToDoHandler}
            className={`todo-item__btn --close ${isDone ? '--done': ''}`}
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                class="todo-item__close"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <button
            onClick={setIsDoneHandler}
            className={`todo-item__btn --check ${isDone ? '--done': ''}`}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="todo-item__check"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </div>
    );
};

export default ToDoItem;
