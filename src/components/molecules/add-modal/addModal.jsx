import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './addModal.scss';

const AddModal = ({ closeModal, createTodo }) => {
    let [ modalTodoValue, setModalTodoValue ] = useState('');

    const modalValueHandler = (event) => {
        let { value } = event.target;
        setModalTodoValue(value);
    };

    const createTodoHandler = () => {
        createTodo(modalTodoValue);
        setModalTodoValue('');
        closeModal();
    };

    return(
        ReactDom.createPortal(
        <div className='add-modal'>
            <div className='modal__container'>
                <button
                className='modal__close'
                onClick={closeModal}
                >
                    <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='modal__icon'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    >
                        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
                <h3 className='modal__title'>Add your to-do</h3>

                <textarea
                className='modal__text' 
                cols="30"
                rows="10"
                value={modalTodoValue}
                onChange={modalValueHandler}
                ></textarea>

                <button
                className='modal__btn --cancel'
                onClick={closeModal}
                >
                    Cancel
                </button>
                <button
                className='modal__btn --accept'
                onClick={createTodoHandler}
                >
                    Add to-do
                </button>
            </div>
        </div>
        , document.getElementById('portal'))
    );
};

export default AddModal;
