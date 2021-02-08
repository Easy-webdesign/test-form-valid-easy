import {Checkbox, Input, Select } from '../../UI';
import isJs from 'is_js';

const numValid = (value) => {
    const reg = /((\+7?\ ?\-?\(?|7?\ ?\-?\(?|8\ ?\-?\(?)?([0-9]{1,3}\)?\-?|\ ?)?([0-9]{1,3}\-?|\ ?)?(\ ?[0-9]{1,2}\-?|\ ?)?([0-9]{1,2})?)/g;
    const regValid = /(\d{11})/g;

    return {
        value: value.match(reg)[0],
        minLength: regValid.test(value)
    };
}

function utils(th, state){
    const obj = {
        mainValidateHandler: function(formValidate){
            let isValid = true;
            Object.entries(formValidate).forEach(([key, val], i) => {
                if(key !== 'lang' && val.box)isValid = val.value.trim() !== '' && val.valid && isValid;
                if(key === 'checkbox') isValid = val.valid && isValid;
            });
    
            th.setState({validForm: isValid})
        },
    
        validate: function(value, validation){
            
            if(!validation)return true;
    
            let isValid = true;
    
            if(validation.required) isValid = value.trim() !== '' && isValid;
            if(validation.email) isValid = isJs.email(value.trim()) && isValid;
            if(validation.minLength) isValid = numValid(value).minLength && isValid;
    
            return isValid;
        },
    
        onCheckHandler: function(bool){
            const formValidate = {...state.formValidate};
            formValidate.checkbox.valid = bool;
            th.setState({formValidate})
            obj.mainValidateHandler(formValidate);
        },
        
        onChangeHandler: function(e, controlName){
            const formValidate = {...state.formValidate};
            const control = {...formValidate[controlName]};
            if(controlName === 'number'){
                control.value = numValid(e.target.value).value;
            } else{ 
                control.value = e.target.value;
            }
            control.touched = true;
            control.valid = this.validate(control.value, control.validation);
            
            formValidate[controlName] = control;
            
            th.setState({formValidate});
            this.mainValidateHandler(formValidate);
        },
        
        renderFormInputs: function(){
            return Object.entries(state.formValidate).map(([key, val], i) => {
                if(val.box && val.box === 'Input'){
                    const value = {...val};
                    const {box, validation, ...values} = value;
                    delete value.box;
                    delete value.validation;
                    return <Input 
                        {...values} 
                        shouldValidate={!!validation}
                        onChangeHandler={e => this.onChangeHandler(e, key, box)}
                        key={i}/>
                } else if(key === 'lang'){
                    return <Select key={i}/>
                } else if(key === 'checkbox'){
                    return <Checkbox key={i} {...val} onClick={this.onCheckHandler}/>
                }
            })
        }
    }


    return obj;
}

export {utils}