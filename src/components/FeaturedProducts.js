import React, { Component } from 'react'
import { ProductContext } from "../context"
import FeaturedProduct from "./FeaturedProduct"
import "../styles/FeaturedProducts.css"

export default class FeaturedProducts extends Component {
    static contextType = ProductContext
    render() {
        let {featuredProducts: featured} = this.context;
        featured = featured.map(product => {
            return <FeaturedProduct key={product.id} product={product} />
        })
        
        return (
            <section className="featured-products">
                <h3>Featured Products</h3>
                <hr></hr>
                <div className="featured-products-center">
                    {featured}
                </div>
            </section>
        )
    }
}
