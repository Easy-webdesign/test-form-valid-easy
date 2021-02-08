import React from 'react';
import './index.scss';

const Button = p => {
    const cls = !p.dis ? 'button disabled' : 'button'
    return(
        <button 
            className={cls} 
            onClick={(e) => {e.preventDefault()}}>
            {p.children}
        </button>
    );
};

export default Button