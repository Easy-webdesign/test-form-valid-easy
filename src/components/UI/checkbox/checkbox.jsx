import React, { useState } from 'react';
import './index.scss';


const Checkbox = p => {
    const [check, setCheck] = useState(false);

    const cls = check ? 'checked' : '';
    return(
        <div className='checkbox'>
            <span 
                className={cls}
                onClick={e => {
                    setCheck(s =>  s = !s);
                    p.onClick(!check);
                }}
            ></span>
            <div className="use-politics">Принимаю <a href="/">условия</a> использования</div>
        </div>
    );
};

export default Checkbox;