import { useState } from "react";
import Titulo from "../Titulo"
import './ColorGenerator.css'

const ColorGenerator = () => {
  const [color, setColor] = useState("000000");

  const options = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

  const getRandomHexDigit = () => {
    const number = Math.floor((Math.random() * 16));
    return number
  }

  const getRandomColor = () => {

    let newColor = '';
    for(let i=0; i < 6; i++){
      const colorComponent = options[getRandomHexDigit()]
      newColor = newColor + colorComponent
    }
    setColor(newColor)

  }

  return (
    <article className="article-project">
      <Titulo titulo="Color Generator" />
      <div 
        className="container-color-generator"
        style={{backgroundColor:`#${color}`}}
      >
        <p>#{color}</p>
        <button onClick={getRandomColor}>Generar</button>
      </div>
    </article>
  )
}

export default ColorGenerator
