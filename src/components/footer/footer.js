/**
 * @Author: root
 * @Date:   2023-05-12T21:50:36+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-14T15:19:23+05:30
 */
import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"
import insta from "../../assets/logo_instagram.png"
import twitter from "../../assets/logo_twitter.png"
import fb from "../../assets/logo_fb.png"

function footer() {
    return (
        <div className="footer_container">
            <div className="footer_logo">
              <img src={logo} alt="logo"/>
            </div>
            <div className="footer_contact">
              <div className="footer_contact_title">
                <p>Contact Us</p>
              </div>
              <div className="footer_contact_address">
                <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
              </div>
              <div className="footer_contact_mail">
                <p>example2020@gmail.com</p>
              </div>
              <div className="footer_contact_number">
                <p>(904) 443-0343</p>
              </div>
            </div>
            <div className="footer_more">
              <div className="footer_more_title">
                <p>More</p>
              </div>
              <div className="footer_more_items one">
                <p>About Us</p>
              </div>
              <div className="footer_more_items two">
                <p>Products</p>
              </div>
              <div className="footer_more_items three">
                <p>Career</p>
              </div>
              <div className="footer_more_items four">
                <p>Contact Us</p>
              </div>
            </div>
            <div className="footer_social">
              <div className="footer_social_title">Social Links</div>
              <div className="i_logo">
                <img src={insta} alt="insta"/>
              </div>
              <div className="t_logo">
                <img src={twitter} alt="twitter"/>
              </div>
              <div className="f_logo">
                <img src={fb} alt="fb"/>
              </div>
              <div className="copy_right">
                <p>© 2022 Food Truck Example</p>
              </div>
            </div>
        </div>
    )
}

export default footer
