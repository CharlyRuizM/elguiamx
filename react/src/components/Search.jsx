import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import logo from '../assets/static/logo.png';

const Search = ({isHome}) => {
    const inputStyle = classNames('input', {
        isHome
    });
    return (
        <section className="home-search">
            <img className="login__logo" src={logo} alt="El guía mx"></img>
            <input type="text" className={inputStyle} placeholder="Estoy Buscando..." />
        </section>
    );
};

export default Search;