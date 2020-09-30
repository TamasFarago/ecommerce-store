import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Product.css"
import PropTypes from "prop-types"

export default function Product({product}) {
    const{name,slug,images,price, type} = product
    return (
        <article className="product">
            <div className="img-container">
            <Link to={`/products/${slug}`}>
            <img src={images[0]} alt="single product"></img>
            </Link>
            <Link to={`/products/${slug}`}>
            <div className="view">
                VIEW
            </div>
            </Link>
                
            </div>
            <div className="product-details">
                <p>{type}</p>
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
            <div className="add-to-cart">add to cart</div>
            
        </article>
    )
}


Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired
    })
}