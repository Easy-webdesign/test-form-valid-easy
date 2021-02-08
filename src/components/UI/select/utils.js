const containsValid = (target, fn) => {
    
    if(target.classList.contains('select') || 
            target.classList.contains('select-value') || 
            target.classList.contains('select-value-box')|| 
            target.tagName === 'IMG'
        ){
        fn(s => s = !s);
    }
}

export {
    containsValid
}