import React from 'react'
import "../styles/ProductsFilter.css"

export default function ProductsFilter(props) {
    return (
        <div className="product-filter">
            <input 
            placeholder="What are you looking for?"
            onChange={props.handleInput}
            type="text"
           ></input>
        </div>
    )
}
