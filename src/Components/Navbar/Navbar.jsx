import React, { Component } from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';



class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <NavLink className=" navbar-brand title" to="home">Start Framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="uls navbar-nav ms-auto fs-6 pe-5">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white me-3 rounded rounded-2" aria-current="page" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white me-3 rounded rounded-2" to="portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white me-3 rounded rounded-2" to="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    }
}

export default Navbar;