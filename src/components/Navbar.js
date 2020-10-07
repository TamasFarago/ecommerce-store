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
                <div className="logo"> 
                <Link to="/">
                <img src={logo} alt="logo"></img>
                </Link>
                </div>
                
                <div className="navbar-content">
                <ul className="nav-list1">
                    <NavLink exact to="/" activeClassName="nav-active"><li>Home</li></NavLink>
                    <NavLink exact to="/products" activeClassName="nav-active"><li>Shop</li></NavLink>
                    <NavLink exact to="/news" activeClassName="nav-active"><li>News</li></NavLink>
                    <NavLink exact to="/contact" activeClassName="nav-active"><li>Contact</li></NavLink>
                </ul>
                <ul className="nav-list2">
                    <p>CART</p>
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
