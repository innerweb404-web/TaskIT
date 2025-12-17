import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <div className='header'>
        <h1>
            TaskIT <FontAwesomeIcon icon={faListCheck} />
        </h1>
        </div>
    );
};

export default Header;
