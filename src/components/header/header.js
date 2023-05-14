/**
 * @Author: root
 * @Date:   2023-05-12T21:50:02+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-14T17:39:39+05:30
 */
import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"
import header_image from "../../assets/header_image.png"
import header_frame from "../../assets/header_frame.png"

function header() {
    return (
        <div className="header_container">
            <div className="left_container">
              <div className="logo">
                <img src={logo} alt="logo"/>
              </div>
              <div className="banner">
                <p>Discover the <span>Best</span> Food and Drinks</p>
              </div>
              <div className="para">
                <p>Naturally made Healthcare Products for the better care & support of your body.</p>
              </div>
              <div className="explore">
                <button>Explore Now!</button>
              </div>
            </div>
            <div className="right_container">
              <img src={header_image} className="h_image" alt="header"/>
              <img src={header_frame} className="h_frame" alt="header frame"/>
              <button>Get In Touch</button>
            </div>
        </div>
    )
}

export default header
