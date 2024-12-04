import { useEffect, useState } from 'react';
import Titulo from "../Titulo"
import './PruebaTecnica.css'

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

const PruebaTecnica = () => {

    const [ fact, setFact ] = useState()
    const [ imageUrl, setImageUrl ] = useState()

    useEffect( () => {
        fetch(CAT_ENDPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact( fact )

                const threeFirstWords = fact.split(' ').slice(0,3).join(' ')

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        console.log(response)
                        const { url } = response
                        setImageUrl(`https://cataas.com${url}`)
                    })
            })
    }, [])

    return (
    <article className="article-project">
        <Titulo titulo="Prueba técnica de gatos" />
        <div className='container-lg'>
            { fact && <p>{fact}</p> }
            { imageUrl && <img src={imageUrl} alt={`Image of ${fact}`} /> }
        </div>
    </article>
    )
}

export default PruebaTecnica
