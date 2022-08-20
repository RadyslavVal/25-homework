import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {

    toogle = () => {
        const toggler = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('.collapse');
        collapse.classList.toggle('show')
        toggler.classList.toggle('collapsed')
    };

    render() {
        const baseUrl = "/25-homework";
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-brand">HW-25 SPA</div>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.toogle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav" id="menu">
                            <li className="nav-item" id="films">
                                <Link className="nav-link" to={`${baseUrl}/`}>Home</Link>
                            </li>
                            <li className="nav-item" id="planets">
                                <Link className="nav-link" to={`${baseUrl}/posts`}>Posts</Link>
                            </li>
                            <li className="nav-item" id="planets">
                                <Link className="nav-link" to={`${baseUrl}/album`}>Album</Link>
                            </li>
                            <li className="nav-item" id="planets">
                                <Link className="nav-link" to={`${baseUrl}/contacts`}>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}