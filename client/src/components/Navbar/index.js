import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./style.css";
import Ajalogo from "../../assets/images/aja-logo@2x.png";

class Navbar extends Component {

    render() {

        return (
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/dashboard"><img src={Ajalogo} width="30" height="30" alt="Aja app logo"/> Aja </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link">
                                        Signup
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </nav>
            
                );
            }
        }
        
export default Navbar;