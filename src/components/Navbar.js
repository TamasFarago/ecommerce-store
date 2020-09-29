import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="logo"> <img src={logo}></img></div>
                <div className="navbar-content">
                <ul className="nav-list1">
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
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
