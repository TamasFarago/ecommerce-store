import React, { Component } from 'react'
import ProfilePic from "../images/profile.png"
import {FaStar} from "react-icons/fa"
import "../styles/Comment.css"

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = { rating: Number(this.props.rating)}
    }


    render() {
        let rating = this.state.rating
        return (
            <div className="comment">
                <div>
                <img src={ProfilePic} alt="profile" style={{height: "70px"}}/>
                </div>
                <div className="comment-inner">
                <div className="star2">
                    {[...Array(rating)].map(() => {
                        return  (
                        <div>
                         <FaStar color={"#ffc107"}/>
                        </div>
                    )})}
                </div>
                <p>Your review is awaiting approval</p>
                <h1>{this.props.name}</h1>
                <p className="comment-text">{this.props.comment}</p>
                </div>
            </div>
            
        )
    }}

