import React, { Component } from 'react'
import { ProductContext } from "../context"
import "../styles/Popup.css"
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

export default class Popup extends Component {
    static contextType = ProductContext;
    render() {
        return (
            <>
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
            </>
        )
    }
}
