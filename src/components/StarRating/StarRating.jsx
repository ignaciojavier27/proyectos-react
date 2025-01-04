import { useState } from "react";
import Titulo from "../Titulo"
import "./StarRating.css"
import Star from "./Star";

const initialStars = [
  { id:1, isSelected: false },
  { id:2, isSelected: false },
  { id:3, isSelected: false },
  { id:4, isSelected: false },
  { id:5, isSelected: false }
];


const StarRating = () => {

  const [stars, setStars] = useState(initialStars);

  const handleSelected = (id) => {
    const newStars = stars.map( star => {
      if(star.id > id){
        return{
          ...star,
          isSelected: false,
        }
      }else{
        return{
          ...star,
          isSelected: true
        }
      }
    })
    setStars(newStars)
  }


  return (
    <article>
        <Titulo titulo="Star Rating" />
        <div className="star-container">
          {
            stars.map( star => <Star 
                                key={star.id}
                                stars={stars}
                                data={star}
                                handleSelected={handleSelected}/>)
          }
        </div>
    </article>
  )
}

export default StarRating
