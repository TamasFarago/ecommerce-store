import React, { Component } from 'react'
import Iframe from 'react-iframe'
import "../styles/YoutubePlayer.css"

export default class YoutubePlayer extends Component {
    render() {
          return (
        <section className="youtube">
            <h3>See our products</h3>
            <hr />
          <Iframe url="http://www.youtube.com/embed/cSGJcjrWCyc"
          width="100%"
          height="150px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
          </section>
          )
          
          }
    }

