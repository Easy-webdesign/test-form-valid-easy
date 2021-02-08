import React, {Component} from 'react';
import { Form, SignUp } from '../components';
import './index.scss';

class App extends Component {
    render(){
        return(
            <div className='app'>
                <SignUp/>

                <Form/>
                
            </div>
        );
    };
};

export default App