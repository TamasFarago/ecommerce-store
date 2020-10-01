import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = [{name: "", comment: ""}]
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
       this.setState({
           [evt.target.name]: evt.target.value
       }) 
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createComment(this.state)
        this.setState({name: "" , comment: ""})
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
                <button>Add Comment</button>
            </form>
        )
    }
}
