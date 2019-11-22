import React from 'react';

const HeaderSearch = () => {
    return (
<div>
<header className="header">  
      <img className="header__img" src="./images/logoblanco.png" alt="El guia mx" />
      <div className="header__input">
        <input className="main_title--inputSearch" type="text" placeholder="Estoy buscando"/> 
        <input className="main_title--inputPlace" type="text" placeholder="lugar"/> 
        <button className="button--search">buscar</button>
      </div>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="./images/logouser.png" alt="User"/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>


    </div>  
    </header>
</div>


)};

export default HeaderSearch;