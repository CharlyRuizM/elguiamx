import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo.png';
import icon_user from '../assets/static/user-icon.png';

const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    };

    return (
        <header className="header">

            <Link className="header__logo" to="/">
                <img src={logo} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">

                {hasUser ?
                    <img src={gravatar(user.email)} alt={user.email}/> :
                    <img src={icon_user} alt="" />
                }
                
                </div>
                    {hasUser ?
                        <Link to="/">{user.name}</Link>
                        : null
                    }
                    {hasUser ?
                        <Link to="#logout" onClick={ handleLogout }>Cerrar Sesión</Link>
                        : 
                        <Link to="/login">Iniciar Sesión</Link>
                    }
                    
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);