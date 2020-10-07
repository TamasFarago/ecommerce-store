import React, { Component } from 'react'
import "../styles/News.css" 
import {Link} from "react-router-dom"
import picture1 from "../images/blogpost3.jpg"



export default class News extends Component {

    render() {
        return (
            <div className="news">
              <div className="news-container">
                  <div className="news1">
                  <div className="news-title">
                      <h3>Top 5 Used Computers For 2020</h3>
                      <p>Posted on October 6th, 2020</p>
                  </div>
                <div className="news-grid1">
                    <img src={picture1} style={{width: "70%"}}></img>
                    <div className="news-grid-text">
                        <p>Dell Optiplex 990 Desktop Computers are perhaps the best an incentive on the auxiliary market. They are sufficiently ongoing to have Core i3, i5, and i7 processors however mature enough to be as modest as $115. Furthermore, that $115 model was over $1,000 new. I wish I could get that sort of reserve funds on a trade-in vehicle... </p>
                        <Link to="/news/1">
                        <button>continue reading</button>
                        </Link>
                    </div>
                </div>
                </div>
                <hr className="news-hr"/>
                
              </div>
            </div>
        )
    }
}
