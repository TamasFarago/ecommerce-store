import React, { Component } from 'react'
import ProfilePic from "../images/profile.png"

export default class Comment extends Component {
    render() {
        return (
            <div>
                <img src={ProfilePic} alt="profile picture" style={{height: "100px"}}/>
                <h1>{this.props.name}</h1>
                <li>{this.props.comment}</li>
            </div>
        )
    }
}
