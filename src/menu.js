import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const links = [
    { route: "/", label: "Main"},
    { route: "/casas", label: "Casa"},
];

export class Menu extends Component {
    renderLink = () => {
        return links.map( link =>
            <Link key={link.route} className="nav-link" to={link.route}>{link.label}</Link>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { this.renderLink() }
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Menu;