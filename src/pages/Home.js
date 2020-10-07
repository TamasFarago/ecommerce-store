import React, { Component } from 'react'
import "../styles/Home.css"
import Hero from "../components/Hero"
import Slider8 from "../images/slider8.jpg"
import Hero1 from "../images/hero1.jpg"
import box from "../images/svg/box-open-solid.svg"
import dollar from "../images/svg/dollar-sign-solid.svg"
import shipping from "../images/svg/shipping-fast-solid.svg"
import { ProductContext } from "../context"
import { Link } from "react-router-dom"


export default class Home extends Component {
    constructor(props){
        super(props)
    }
    static contextType = ProductContext;
    render() {
        console.log(this.context.featuredProducts)
        return (
            <section className="home">
            <Hero 
                image={Slider8}
                text="Wide variety of smart watches."
                price="From only $99!"/>
            <div className="home-grid">
                <div className="home-grid-content1 ct">
                    <img src={shipping}></img>
                    <h5>Priority Shipping</h5>
                    <p>We use priority shipping for all our orders</p>
                </div>
                <div className="home-grid-content2 ct">
                    <img src={box}></img>
                    <h5>Free return</h5>
                    <p>If there's something wrong with your package, we offer a free return shipping</p>
                </div>
                <div className="home-grid-content3 ct">
                    <img src={dollar}></img>
                    <h5>Free shipping</h5>
                    <p>We ship all our products for free!</p>
                </div>
            </div>
            <Hero 
                image={Hero1}
                text="Exclusive deals only this month!"
                style={{left: "55%"}}/>

                <div className="featured-home"><h2>Featured products</h2></div>
                <div className="products-home">
               {this.context.featuredProducts.map(product => {
                   return <article className="product">
                        <div className="img-container">
                        <Link to={`/products/${product.slug}`}>
                        <img src={product.images} alt="single product"></img>
                        </Link>
                        <Link to={`/products/${product.slug}`}>
                        <div className="view">
                            VIEW
                        </div>
                        </Link>
                            
                        </div>
                        <div className="product-details">
                            <p>{product.type}</p>
                            <h5>{product.name}</h5>
                            <p>${product.price}</p>
                        </div>
                        <button 
                            className="add-to-cart"
                            onClick={() => this.context.addCart(product.id)}
                            >add to cart</button>
                   
               </article>
               })}
               </div>
        </section>
        )
    }
}

