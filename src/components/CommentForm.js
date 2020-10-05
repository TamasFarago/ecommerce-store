import React, { Component } from 'react'
import {FaStar} from "react-icons/fa"
import "../styles/CommentForm.css"


export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = [{name: "", comment: "", rating: 5}]
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setRating = this.setRating.bind(this)
        this.ratingAlert = this.ratingAlert.bind(this)
      
    }
    handleChange(evt) {
       this.setState({
           [evt.target.name]: evt.target.value
       }) 
    }

   

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createComment(this.state)
        this.setState({name: "" , comment: "", rating: 5})
    }

    setRating(evt){
        this.setState({
            rating: evt.target.value
        })
    }

    ratingAlert(){
        alert("You must rate the product before submitting")
        console.log("k")
    }

    componentWillMount(){
        this.setState({rating: 5})
    }

  
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h4>Review this product</h4>
                <p className="your-rating">Your rating *</p>
                
                <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            
            return  (
            <label>
            <input 
                type="radio" 
                value={ratingValue} 
                onClick={this.setRating}
               
                ></input>
            <FaStar 
                className="star" 
                size={15} 
                color={ratingValue <= (this.state.rating) ? "#ffc107" : "#e4e5e9"}
                
                 />
            </label>
            
        )})}
       
        </div>
        <div className="comment-form">
        <label htmlFor="name">Name *</label>
                <input 
                className="name-input"
                type="text" 
                id="name" 
                value={this.state.name} 
                onChange={this.handleChange}
                name="name"
                required/>

                <label htmlFor="comment">Your Review *</label>
                <textarea
                rows="4" 
                className="comment-input"
                type="text" 
                id="comment" 
                value={this.state.comment} 
                onChange={this.handleChange}
                name="comment"
                required/>
                
                <button className="comment-submit">SUBMIT</button>

                </div>
            </form>
        )
    }
}
