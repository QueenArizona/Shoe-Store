import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/header-logo.png';
import HeaderControl from './HeaderControl';

function Header(props) {
    return (<>
        <header className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Bosa Noga"/>
                        </a>
                        <div className="collapase navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <NavLink className="nav-link" exact to="/">
                                    <li className="nav-item active">Главная</li>
                                </NavLink>
                                <NavLink className="nav-link" exact to="/catalog">
                                    <li className="nav-item">Каталог</li>
                                </NavLink>
                                <NavLink className="nav-link" to="/about">
                                    <li className="nav-item">О магазине</li>
                                </NavLink>
                                <NavLink className="nav-link" to="/contacts">
                                    <li className="nav-item">Контакты</li>
                                </NavLink>
                            </ul>
                            <HeaderControl />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </>)
}

export default Header;
