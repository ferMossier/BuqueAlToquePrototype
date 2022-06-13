import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
 import "./SignUpStyles.css";

export default function Header() {

    return (
        <div className="tm-top-bar" id="tm-top-bar">
            <div className="container">
                <div className="row">

                    <nav className="navbar navbar-expand-lg narbar-light">
                        <a className="navbar-brand mr-auto" href="/#">
                            <img src={logo} alt="Site logo" />
                            Buque Al Toque
                        </a>
                        <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse"
                            data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#top">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sec-subs">Subscripcion</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sec-travel">Viajes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sec-contact">Contactanos</a>
                                </li>
                                <li className="nav-item">
                                    <Link  to="/SignUp" className="nav-link">Registrate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  to="/Login" className="nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
