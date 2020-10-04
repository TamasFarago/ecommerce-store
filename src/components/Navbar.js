import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../styles/Navbar.css"
import {NavLink, Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../context"

export default class Navbar extends Component {
    static contextType = ProductContext;
    render() {
        const {cart} = this.context
        return (
            <nav className="navbar">
                <div className="logo"> <img src={logo} alt="logo"></img></div>
                <div className="navbar-content">
                <ul className="nav-list1">
                    <NavLink to="/"><li>Home</li></NavLink>
                    <li>About</li>
                    <NavLink to="/products"><li>Shop</li></NavLink>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                <ul className="nav-list2">
                    <li>Login/Register</li>
                    <div className="nav-cart">
                            <span>{cart.length}</span>
                    <Link to="/cart">
                    <FaShoppingCart className="shopping-cart"/>
                    </Link>
                    </div>
                </ul>
                </div>
            </nav>
        )
    }
}
