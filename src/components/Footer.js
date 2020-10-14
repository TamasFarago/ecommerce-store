import React from 'react'
import "../styles/Footer.css"
import {FaCcVisa, FaCcMastercard, FaCcStripe, FaCcPaypal, FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="payment-types">
                    <FaCcVisa className="p-icon"/>
                    <FaCcMastercard className="p-icon"/>
                    <FaCcStripe className="p-icon"/>
                    <FaCcPaypal className="p-icon"/>
                </div>
                <div className="copyright">
                <p>Copyright 2020 &#169;</p>
                <p>Website by <a className="tamasfarago" href="https://tamasfarago.netlify.app">Tamas Farago</a></p>
                </div>
                <div className="social-icons">
                    <FaFacebookSquare className="s-icon"/>
                    <FaInstagram className="s-icon"/>
                    <FaTwitter className="s-icon"/>
                    <FaLinkedin className="s-icon"/>
                </div>
            </div>
        </footer>
    )
}
