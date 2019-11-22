import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import logo from '../assets/static/logo.png';

const Register = props => {

    const [form, setValues] =  useState({
        email: '',
        name: '',
        password: ''
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return (
        <section className="register">
            <section className="register__content">
                <img className="login__logo" src={logo} alt="El guía mx"></img>
                <h1>REGISTRATE</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        className="input" 
                        type="text" 
                        placeholder="Nombre" 
                        onChange={handleInput}
                    />
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
                    <button className="btn--primary">Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);