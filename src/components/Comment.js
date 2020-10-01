import React, { Component } from 'react'
import ProfilePic from "../images/profile.png"
import {FaStar} from "react-icons/fa"

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {rating: Number(this.props.rating)}
    }


    render() {
        let rating = this.state.rating
        return (
            <div>
                <img src={ProfilePic} alt="profile picture" style={{height: "100px"}}/>
                <h1>{this.props.name}</h1>
                <li>{this.props.comment}</li>
                

                <div>
        {[...Array(rating)].map((star, i) => {
            const ratingValue = i + 1
            return  (
            <div>
                <FaStar color={"#ffc107"}/>
            </div>
        )})}
       
        </div>


            </div>
        )
    }
}
