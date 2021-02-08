import React from 'react';
import './index.scss';

const SignUp = p => {
    return(
        <div className="signup">
            <h1>Регистрация</h1>
            <div className="signup-login-content">
                <div className="subtitle">Уже есть аккаунт?</div>
                <a href="/">Войти</a>
            </div>
        </div>
    );
};

export default SignUp