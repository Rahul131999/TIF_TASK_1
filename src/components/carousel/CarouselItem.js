/**
 * @Author: root
 * @Date:   2023-05-13T11:33:18+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-14T21:53:18+05:30
 */
import React from 'react'
import "./CarouselItem.css"

function CarouselItem(props) {
    return (
        <div className="item_container">
          <div className="item_image" style={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
      }}>
          </div>
          <div className="item_title">
            <p>{props.title}</p>
          </div>
          <div className="item_text">
            <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
          </div>
          <div className="item_button">
            <button>Read More</button>
          </div>
        </div>
    )
}

export default CarouselItem
