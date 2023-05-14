/**
 * @Author: root
 * @Date:   2023-05-12T21:51:00+05:30
 * @Last modified by:   root
 * @Last modified time: 2023-05-13T16:36:47+05:30
 */
import React,{useState} from 'react'
import "./article.css"
import cardImage1 from "../../assets/card_item1.png"
import cardImage2 from "../../assets/card_item2.png"
import cardImage3 from "../../assets/card_item3.png"
import cardImage4 from "../../assets/card_item4.png"
import cardImage5 from "../../assets/card_item5.png"
import cardImage6 from "../../assets/card_item6.png"
import CarouselItem from "../carousel/CarouselItem.js"
import next_act from "../../assets/next_active.svg"
import prev_dis from "../../assets/prev_disabled.png"
import prev_act from "../../assets/prev_active.png"
import next_dis from "../../assets/next_disabled.png"



function Article() {

  const [page,setPage] = useState(0)
  const [next,setNext] = useState({next_act})
  const [prev,setPrev] = useState({prev_dis})

  function clickNext(){
    setPage(1)
    setNext(next_dis)
    setPrev(prev_act)
  }

  function clickPrev(){
    setPage(0)
    setNext(next_act)
    setPrev(prev_dis)
  }

  const set = [
    [ {
    img: cardImage1 ,
    title: "Grilled Tomatoes at Home"
  },
  {
    img: cardImage2,
    title: "Snacks for Travel"
  },
  {
    img: cardImage3,
    title: "Post-workout Recipes"
  } ] ,


  [ {
    img: cardImage4,
    title: "How To Grill Corn"
  },
  {
    img: cardImage5,
    title: "Crunchwrap Supreme"
  },
  {
    img: cardImage6,
    title: "Broccoli Cheese Soup"
  } ]
]
    return (
        <div className="article_container">
          <div className="article_title">
            <p>Latest Articles</p>
          </div>
          <div className="carousel_container">
            <CarouselItem img={set[page][0].img} title={set[page][0].title} />
            <CarouselItem img={set[page][1].img} title={set[page][1].title} />
            <CarouselItem img={set[page][2].img} title={set[page][2].title} />
          </div>
          <button className="pre-button" onClick={clickPrev}><img src={prev} alt="p"/>  </button>
          <div className="page_no">
            <p>{page+1}/2</p>
          </div>
          <button className="nxt-button" onClick={clickNext}><img src={next} alt="n"/></button>
        </div>
    )
}

export default Article
