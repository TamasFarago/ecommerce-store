import React, { Component } from 'react'
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import "../styles/Reviews.css"

export default class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
        this.create = this.create.bind(this)
    }
    create(newComment){
            this.setState({
                comments: [...this.state.comments, newComment]
            })
    }
    render() {
        const comments = this.state.comments.map(comment => {
            return <Comment comment={comment.comment} name={comment.name} rating={comment.rating}/>
            
        })
        
        if(this.state.comments.length === 0){
            return (
                <section className="comment-section">
                        <div className="reviews-title">
                            <h5>Reviews ({this.state.comments.length})</h5>
                        </div>
                        <div className="comments">
                            <h5>Reviews</h5>
                        <ul>There are no reviews yet.</ul>
                        <CommentForm createComment={this.create}/>
                        </div>
                    </section>
            )} else {
                return (
                    <section className="comment-section">
                        <div className="reviews-title">
                            <h5>Reviews ({this.state.comments.length})</h5>
                        </div>
                        <div className="comments">
                            <h5>Reviews</h5>
                        <ul>{comments}</ul>
                        <CommentForm createComment={this.create}/>
                        </div>
                    </section>
                )
            }
        }
        
    }

