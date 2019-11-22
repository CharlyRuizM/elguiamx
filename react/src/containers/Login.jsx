import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import logo from '../assets/static/logo.png';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {

    const [form, setValues] = useState({
        email: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <section className="login">
            <section className="login__content">
                <img className="login__logo" src={logo} alt="El guía mx"></img>
                <h1>INICIAR SESIÓN</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo" 
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
                    <button className="btn--primary">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                        <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} /> Inicia sesión con Google</div>
                    <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta {' '}
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    );
};  

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);