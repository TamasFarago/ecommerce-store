import React, { Component } from 'react'
import { ProductContext } from "../context"
import "../styles/Products.css"
import Product from "../components/Product"

export default class Products extends Component {
    static contextType = ProductContext;
    render() {
        let { products: products} = this.context
        products = products.map(product => {
            return <Product key={product.id} product={product} />
        })
       
        return (
            <section className="products-page">
                <div className="products-container">
                    <div className="products-sidebar">
                        <h2>Shop</h2>
                    </div>
                    <div className="products">
                        {products}
                    </div>
                </div>
            </section>
        )
    }
}
