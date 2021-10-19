import React from 'react';
import './header.scss';

const Header = ({ children }) => {
    return(
        <header className='header'>
            <h1 className='header__title'>Easy To-dos!</h1>
            {
                children
            }
        </header>
    );
};

export default Header;
