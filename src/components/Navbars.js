import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbars extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Mundo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/americas">America</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/europe">Europa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/asia">Asia</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/oceania">Oceania</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/africa">Africa</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
