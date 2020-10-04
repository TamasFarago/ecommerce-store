import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../styles/Product.css"
import PropTypes from "prop-types"
import { ProductContext } from "../context"

export default class Product extends Component {
    constructor(props){
        super(props);
    }
    static contextType = ProductContext;
    render() {
        return (
            <article className="product">
            <div className="img-container">
            <Link to={`/products/${this.props.product.slug}`}>
            <img src={this.props.product.images} alt="single product"></img>
            </Link>
            <Link to={`/products/${this.props.product.slug}`}>
            <div className="view">
                VIEW
            </div>
            </Link>
                
            </div>
            <div className="product-details">
                <p>{this.props.product.type}</p>
                <h5>{this.props.product.name}</h5>
                <p>${this.props.product.price}</p>
            </div>
            <button 
                className="add-to-cart"
                onClick={() => this.context.addCart(this.props.product.id)}
                >add to cart</button>
            
        </article>
                
            
        )
    }
}

Product.propTypes = {
        product: PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
            price: PropTypes.number.isRequired
        })
    }