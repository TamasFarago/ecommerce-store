import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.css"
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo"> <img src={logo} alt="logo"></img></div>
                <div className="navbar-content">
                <ul className="nav-list1">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <li>About</li>
                    <NavLink to="products"><li>Shop</li></NavLink>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <ul className="nav-list2">
                    <li>Login/Register</li>
                    <li>Cart</li>
                </ul>
                </div>
            </nav>
        )
    }
}
