import React from 'react'
import {Link} from "react-router-dom"
import "../styles/FeaturedProduct.css"

export default function FeaturedProduct({product}) {
    const {name, slug, images, price} = product
    return (
        <>
        <article className="featured-product">
            <div className="featured-product-image">
                <Link to={`/products/${slug}`}>
                <img src={images} alt="featured" style={{height: "50px", width: "50px"}}></img>
                </Link>
            </div>
            <div className="featured-product-data">
                <Link to={`/products/${slug}`}>
                <p>{name}</p>
                </Link>
                <p>${price}</p>
            </div>
            
        </article>
        <hr className="featured-hr"/>
        </>
    )
}
