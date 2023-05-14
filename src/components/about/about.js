/**
 * @Author: root
 * @Date:   2023-05-12T21:51:10+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-14T21:01:27+05:30
 */
import React from 'react'
import "./about.css"
import about_image from "../../assets/about_image.png"

function about() {
    return (
        <div className="about_container">
            <div className="empty"></div>
            <div className="about">
              <div className="about_left_container">
                <img src={about_image} alt="about"/>
              </div>
              <div className="about_right_container">
                <div className="about_banner">
                  <p>About Us</p>
                </div>
                <div className="about_para">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                </div>
                <div className="about_read">
                  <button>Read More</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default about
