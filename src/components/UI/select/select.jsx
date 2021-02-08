import React, { useState } from 'react';
import './index.scss';
import langs from './langs';
import { containsValid } from './utils';
import img from './arrow.svg';

const Select = p => {
    const [value, setValue] = useState('Язык');
    const [active, setActive] = useState(false);

    const clsOptions = active ? 'select-options-box show' : 'select-options-box';
    const clsArrow = active ? 'show' : '';

    return(
        <div className="select-box">
            <label htmlFor="select-value-box">Язык</label>
            <div className={`select ${clsArrow}`} onClick={e => containsValid(e.target, setActive)}>
                <div className="select-value-box" id={'select-value-box'}>
                    <div className='select-value'>{value}</div>
                    <img src={img} alt="" className={clsArrow}/>
                </div>
                <div className={clsOptions}>
                    {langs.map((el, i) => {
                        const active = el === value ? 'option active' : 'option';
                        return <div 
                                className={active} 
                                key={i}
                                onClick={e => {
                                    setValue(e.target.textContent);
                                    setActive(s => s = !s);
                                }}
                            >{el}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Select