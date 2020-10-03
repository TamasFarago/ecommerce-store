import React, { Component } from 'react'
import { ProductContext } from "../context"
import "../styles/Products.css"
import Product from "../components/Product"
import ProductsFilter from "../components/ProductsFilter"
import {Link} from "react-router-dom"
import FeaturedProducts from "../components/FeaturedProducts"
import YoutubePlayer from "../components/YoutubePlayer"


export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = ({searchProduct: ""})
        this.handleInput = this.handleInput.bind(this)
    }
    static contextType = ProductContext;

    handleInput = (e) => {
        this.setState({
            searchProduct: e.target.value})
        
    }
    render() {
        
        let filteredProducts = this.context.products.filter((product) => {
            return product.name.toLowerCase().includes(this.state.searchProduct.toLowerCase())
        })
        // let { products: products} = this.context
        
        filteredProducts = filteredProducts.map(product => {
            return <Product key={product.id} product={product} />
        })


        if(filteredProducts.length === 0){
            return (
            <section className="products-page">
                <div className="hero-container">
                <div className="hero-text">
                        <h1>Discover our<br/> new products!</h1>
                    </div>
                </div>
                <div className="products-container">
                    <div className="products-sidebar">
                        <h2>Shop</h2>
                        <div className="sidebar-nav">
                            <Link to="/">HOME</Link>
                            <p>/</p>
                            <h3>SHOP</h3>
                        </div>
                        <ProductsFilter handleInput={this.handleInput}/>
                        <FeaturedProducts />
                        <YoutubePlayer />
                    </div>
                    <div className="product-error">
                        No products found.
                    </div>
                </div>
            </section> 
            )} else {
            
       
       
        return (
            <section className="products-page">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>Discover our<br/> new products!</h1>
                    </div>
                </div>
                <div className="products-container">
                    <div className="products-sidebar">
                        <h2>Shop</h2>
                        <div className="sidebar-nav">
                            <Link to="/">HOME</Link>
                            <p>/</p>
                            <h3>SHOP</h3>
                        </div>
                        
                        <ProductsFilter handleInput={this.handleInput}/>
                        <FeaturedProducts />
                        <YoutubePlayer />
                    </div>
                    <div className="product-ammount">
                        <p>Showing All {filteredProducts.length} results</p></div>
                    <div className="products">
                        {filteredProducts}
                    </div>
                </div>
            </section> 
        ) 
    } 
} }
