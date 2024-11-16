import Titulo from "../Titulo"
import SelectList from "./SelectList"
import '../../index.css'
import { useState } from "react"

const SelectAnidado = () => {

    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const token = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

    return (
        <article className="article-project">
            <Titulo titulo="Select Anidado" />
            <div className="container">
                <h3>México</h3>
                <SelectList 
                    title="Estado" 
                    url={`https://api.copomex.com/query/get_estados?token=${token}`}
                    handleChange={(e) => {setState(e.target.value)}}
                />
                {state && (
                    <SelectList title="Municipios" url={suburb} handleChange={(e) => {setTown(e.target.value)}}/>
                )}
                {town && (
                    <SelectList title="Colonia" url="" handleChange={(e) => {setSuburb(e.target.value)}}/>
                )}
            </div>
        </article>
    )
}

export default SelectAnidado
