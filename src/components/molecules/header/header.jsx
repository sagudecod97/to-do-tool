import React from 'react';
import './header.scss';

const Header = ({ loading, children }) => {
    return(
        <header className='header'>
            <h1 className={`header__title ${loading ? '--loading' : '' }`}>Easy To-dos!</h1>
            {
                children
            }
        </header>
    );
};

export default Header;
