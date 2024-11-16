import { useState } from "react";
import Titulo from "../Titulo"
import {data} from "./data_acordion";
import AccordianItem from "./AccordianItem";
import './acordion.css'

const Acordion = () => {

  const [ selected, setSelected ] = useState(null);

  const handleSingleSelection = (id) => {
    console.log(id);
    selected === id ? setSelected(null) : setSelected(id);
  }


  return (
    <article className="article-project">
        <Titulo titulo="Acordion" />
        <div className="wrapper">
          <div className="accordian">
            {
              data && data.length > 0
               ? data.map(item => (
                <AccordianItem 
                  key={item.question}
                  item = {item}
                  handleSingleSelection = {handleSingleSelection}
                  selected = {selected}
                />
              ))
               : <div>Data Not Found!</div>
            }
          </div>
        </div>
    </article>
  )
}

export default Acordion
