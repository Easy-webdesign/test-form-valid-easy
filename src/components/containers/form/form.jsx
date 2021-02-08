import React, { Component } from 'react';
import { Button} from '../../UI';

import './index.scss';
import {utils} from './utils';
import validate from './validate';

class Form extends Component {
    state = validate;
    
    render(){
        return(
            <form action="#" method="post" className="form">
                {utils(this, this.state).renderFormInputs()}
                <Button dis={this.state.validForm}>Зарегистрироваться</Button>
            </form>
        );
    }
};

export default Form