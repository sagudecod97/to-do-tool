import React from 'react';
import './search-todo.scss';

const SearchTodo = ({ searchTodo, setSearchTodo, cleanSearchTodo }) => {
    return(
        <div className='search-todo'>
            <input
            className='search-todo__input'
            placeholder='Search any to-do'
            type='text'
            value={searchTodo}
            onChange={setSearchTodo}
            />

            {
                searchTodo && (
                    <button 
                    className='search-todo__button'
                    onClick={cleanSearchTodo}
                    >
                        <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='search-todo__icon' 
                        fill='none'
                        viewBox='0 0 24 24' 
                        stroke='currentColor'
                        >
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                )
            }
        </div>
    );
};

export default SearchTodo;
