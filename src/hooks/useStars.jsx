import { useState } from "react"
import SmileStar1 from "../assets/smileStar1.png"
import SmileStar2 from "../assets/SmileStar2.png"
import SmileStar3 from "../assets/SmileStar3.png"
import SmileStar4 from "../assets/smiley.png"
import SmileStar5 from "../assets/star5.png"
import SmileStar6 from "../assets/star6.png"
const useStars =()=> {
    const [cardList, setCardList] = useState(
        [
             {id: 1, order: 3, text: "card 3", img: SmileStar1},
             {id: 2, order: 2, text: "card 2", img: SmileStar2},
             {id: 3, order: 1, text: "card 1", img: SmileStar3},
             {id: 4, order: 4, text: "card 1", img: SmileStar4},
             {id: 5, order: 5, text: "card 1", img: SmileStar5},
             {id: 6, order: 6, text: "card 1", img: SmileStar6},
        ]
       )
      
       const [currentCard, setCurrentCard] = useState(null)
       function dragStartHandler(e, card){
           console.log("drag",  card)
           setCurrentCard(card)
        }
        
        function dragEndHandler(e){
      }
      function dragLeaveHandler(e){
        }
        
        function dragOverHandler(e){
        e.preventDefault()
       
       }
      
       function dropHandler(e, card){
      e.preventDefault()
      setCardList(cardList.map(c=> {
        if(c.id== card.id){
             return {...c, order: currentCard.order}
        }
      
        if(c.id==currentCard.id){
             return {...c, order: card.order}
        }
        return c
    }))
    //e.target.style.background = "white"
    e.target.style.background = "transparent"
       }
      
       const sortCards= (a, b) => {
      if(a.order> b.order) {
        return 1
    }
    else {
        return -1
      }
       }
      
      
       return {cardList, currentCard, dragEndHandler, dragLeaveHandler,dragOverHandler, dropHandler, sortCards, dragStartHandler}
    }
export default useStars