import React from 'react';
import './index.scss';

// const numValid = (value) => {
//     const reg = /\d{11}/;
//     console.log(value.match(reg) ? value.match(reg)[0] : null);
//     return (value.match(reg) ? value.match(reg)[0] : '')
// }

const Input = p => {
    // console.log(p.valid);

    return(
        <div className='input'>
            <label htmlFor={p.name}>{p.label}</label>
            <input type={p.type} placeholder={p.placeholder} id={p.name} onChange={e => {
                p.onChangeHandler(e);
                // numValid(e.target.value)
            }} value={p.value}/>
            {!p.valid ? <span className="error-message">{p.errorMessage}</span> : null}
        </div>
    );
};

export default Input