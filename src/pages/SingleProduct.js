import React, { Component } from 'react'
import "../styles/SingleProduct.css"
import { Link } from "react-router-dom"
import {ProductContext} from "../context"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Reviews from "../components/Reviews"


export default class SingleProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = ProductContext
    // componentDidMount(){}
    render() {
        const{getProduct} = this.context;
        const product = getProduct(this.state.slug)
        if(!product){
            return <div className="error">
                <h3>The product you're looking for does not exist</h3>
            </div>
        }
        const{name, description, price, images} = product
        return (
            <section className="singleproduct">
                <div className="product-banner">
                    <h2>{name}</h2>
                    <Link to="/">HOME</Link>
                </div>
                <div className="single-product-container">
                    <div className="single-product-img-container">
                        <img src={images}></img>
                    </div>
                    <div className="single-product-info">
                        <h2>{name}</h2>
                        <hr />
                        <div className="single-product-description">
                            <p>{description}</p>
                        </div>
                        <div className="single-product-add-cart">
                            Add to cart
                        </div>
                        <div className="product-social">
                            <div className="icon">
                                <FaFacebook className="social-icon"></FaFacebook>
                                <span>Follow on Facebook</span>
                            </div>
                            <div className="icon">
                                <FaInstagram className="social-icon"/>
                                <span>Follow on Instagram</span>
                            </div>
                            <div className="icon">
                                <FaTwitter className="social-icon"/>
                                <span>Follow on Twitter</span>
                            </div>
                            <div className="icon">
                                <FaLinkedin className="social-icon"/>
                                <span>Follow on LinkedIn</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="single-hr"/>
                <Reviews />
            </section>
        )
    }
}
