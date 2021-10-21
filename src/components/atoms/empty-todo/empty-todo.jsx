import React from 'react';
import './empty-todo.scss';

const EmptyTodo = () => {
    return(
        <div className='empty-todo'>
            <h3
            className='empty-todo__title'
            >
                There are not any to-do. <br/>
                What about adding some?
            </h3>

            <svg
            xmlns='http://www.w3.org/2000/svg'
            class='empty-todo__smile'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
                <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />   
            </svg>
        </div>
    );
};

export default EmptyTodo;
