import React from 'react'
//link for react router
import { Link } from 'react-router-dom'
//image
import logo from '../images/logo.svg'

export default function () {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand"> 
                <img src={logo} alt="logo"/>
            </Link>
            <div className="collaps navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/recipes" className="nav-link">Recipes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
