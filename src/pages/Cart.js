import React, { Component } from 'react'
import "../styles/Cart.css"
import { ProductContext } from "../context"
import {NavLink, Link} from "react-router-dom"
import Delete from "../images/times-circle-regular.svg"

export default class Cart extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.context.getTotal()
    }
    static contextType = ProductContext;
    render() {
        const { cart, increase, reduction, removeProduct, total} = this.context
        if(cart.length === 0){
           return (
           
           <section className="cart">
           <h2 className="empty" style={{textAlign: "center"}}>The cart is currently empty</h2>
           <Link to="/products">
                       <button className="back-btn empty-btn">{'\u2190'} Back to shopping</button>
                       </Link>
           </section>
)
        } else {
        return (
            <section className="cart">
                <div className="cart-nav">
                    <NavLink to="/cart">
                    <p>Shopping Cart</p>
                    </NavLink>
                </div>
                <hr />
                <div className="cart-grid">
                    <div className="cart-products">
                        <table>
                            <tr className="border-right">
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>SUBTOTAL</th>
                            </tr>
                            {cart.map(item => (
                            <tr className="border-bottom border-right">
                                <td className="product-flex">
                                <div className="delete" onClick={() => removeProduct(item.id)}><img className="delete"src={Delete} /></div>
                                <img src={item.images} style={{height: "80px", width: "80px"}}></img>
                                <p className="item-name">{item.name}</p>
                                </td>
                                <td className="bold">${item.price}</td>
                                <td>
                                    <div className="amount">
                                        <button className="count1" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                </td>
                                <td>
                                    <div className="total bold">
                                        ${item.price * item.count}
                                    </div>
                                </td>
                            </tr>
                            ))}
                        
                         
                       </table>
                       <Link to="/products">
                       <button className="back-btn">{'\u2190'} continue shopping</button>
                       </Link>
                       <hr className="cart-hr" />
                    </div>
                    
                    <div className="cart-summary">
                    
                        <table>
                            <tr className="summary-row row1">
                                <th className="cart-totals">CART TOTALS</th>
                                <th> </th>
                            </tr>
                            <tr className="summary-row">
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr className="summary-row border-bottom">
                                <td>Tax</td>
                                <td className="bold">$0.00</td>
                            </tr>
                            <tr className="summary-row">
                                <td>TOTAL</td>
                                <td className="bold">${total}</td>
                            </tr>
                        </table>
                        <button className="checkout-btn">proceed to checkout</button>
                    </div>
                </div>



                
            </section>
        )}
    }
}
