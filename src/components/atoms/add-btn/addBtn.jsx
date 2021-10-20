import React from './addBtn.scss';
import './addBtn.scss';

const AddBtn = ({ onClick, activeModal }) => {
    return(
        <button 
        className={`add-btn ${activeModal ? '--rotated' : ''}`}
        onClick={onClick}
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="add-btn__plus"
            fill="none" 
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <   path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
        </button>
    );
};

export default AddBtn;
