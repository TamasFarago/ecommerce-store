import React, { Component } from 'react'
import StarRating from "./StarRating"
import {FaStar} from "react-icons/fa"

export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = [{name: "", comment: "", rating: 0}]
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setRating = this.setRating.bind(this)
    }
    handleChange(evt) {
       this.setState({
           [evt.target.name]: evt.target.value
       }) 
    }

   

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createComment(this.state)
        this.setState({name: "" , comment: "", rating: 0})
    }

    setRating(evt){
        this.setState({
            rating: evt.target.value
        })
        console.log(evt.target.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">New name</label>
                <label htmlFor="comment">New comment</label>
                <input 
                type="text" 
                placeholder="New Comment" 
                id="comment" 
                value={this.state.comment} 
                onChange={this.handleChange}
                name="comment"/>

                <input 
                type="text" 
                placeholder="New name" 
                id="name" 
                value={this.state.name} 
                onChange={this.handleChange}
                name="name"/>
                
                <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            
            return  (
            <label>
            <input type="radio" name="rating" value={ratingValue} onClick={this.setRating}></input>
            <FaStar className="star" />
            </label>
        )})}
       
        </div>




                <button>Add Comment</button>
            </form>
        )
    }
}
