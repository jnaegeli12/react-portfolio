import React from 'react';
import { Link } from 'react-router-dom';
import logo from './profile.png';

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Judy Naegeli" />
            <h1 className="d-inline-block align-top">Judy Naegeli</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;