import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../styles/Product.css"
import PropTypes from "prop-types"
import { ProductContext } from "../context"
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

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
                <Snackbar 
                   
                    anchorOrigin={{vertical: "bottom", horizontal: "left" }}
                    open={this.context.open}
                    autoHideDuration={2000}
                    message={<span id="message-id">Successfully added to cart!</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    onClose={this.context.closeSnackbar}
                    action={[<IconButton 
                        
                        onClick={this.context.closeSnackbar} 
                        color="inherit" 
                        key="close"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>]}
                    
                    />
            
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