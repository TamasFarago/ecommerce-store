import React, { Component } from 'react'
import "../styles/SideNav.css"
import { NavLink } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"


export default class SideNav extends Component {
    constructor(props){
        super(props);
        this.state = {isOpen: false}
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }
    
    openNav() {
        this.setState({isOpen: !this.state.isOpen})
    }

    closeNav() {
        this.setState({isOpen: false})
    }
    render() {
        return (
            <>     
                 <div className="hamburger-menu" onClick={this.openNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                
                <div className={this.state.isOpen ? "sidenav-main open" : "sidenav-main"}>
                <AiOutlineClose className={this.state.isOpen ? "nav-close nav-close-active" : "nav-close"} onClick={this.closeNav}/>
                    <ul className={this.state.isOpen? "open-li" : "open-li-close"}>
                        <NavLink exact to="/" onClick={this.closeNav}>
                        <li>Home</li>
                        </NavLink>
                        <NavLink exact to="/products" onClick={this.closeNav}>
                        <li>Shop</li>
                        </NavLink>
                        <NavLink exact to="/news" onClick={this.closeNav}>
                        <li>News</li>
                        </NavLink >
                        <NavLink exact to="/contact" onClick={this.closeNav}>
                        <li>Contact</li>
                        </NavLink>
                    </ul>
                </div>
                <div className={this.state.isOpen? "dark-bg" : ""}></div>
            </>
        )
    }
}
