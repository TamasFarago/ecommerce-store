import React, { Component } from 'react'
import CommentForm from "./CommentForm"
import Comment from "./Comment"

export default class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [{name: "John" ,comment: "nice product", rating: 0}]
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
        return (
            <div>
                <CommentForm createComment={this.create}/>
                <ul>{comments}</ul>
            </div>
        )
    }
}
