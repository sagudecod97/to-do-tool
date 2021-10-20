import React from 'react';
import './addToDo.scss';

const AddToDo = ({ children }) => {
    return(
        <footer className='add-todo'>
            {
                children
            }
        </footer>
    )
};

export default AddToDo;
