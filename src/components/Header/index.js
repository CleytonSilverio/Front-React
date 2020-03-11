import React from 'react';

import { Link} from 'react-router-dom';
import "./style.css";

const Header = () => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/casas">Casas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/addshow">Adicionar evento</Link>
            </li>
        </ul>
    </nav>

    

);

export default Header;