import React from 'react';
import './addToDo.scss';

import GitHubLogo from '../../../assets/images/iconmonstr-github-1.svg';

const AddToDo = ({ children }) => {
    return(
        <footer className='add-todo'>
            <div className='add-todo__info'>
                <p className='add-todo__name'>Santiago Agudelo Alvarez</p>

                <a
                href='https://github.com/sagudecod97/to-do-tool'
                className='add-todo__container'
                target='_blank'
                rel="noreferrer"
                >
                    <img src={GitHubLogo} alt="Santiago's GitHub" />
                </a>
            </div>
            {
                children
            }
        </footer>
    )
};

export default AddToDo;
