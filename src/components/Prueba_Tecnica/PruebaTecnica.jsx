import Titulo from "../Titulo"
import './PruebaTecnica.css'
import { useCatImg } from '../../hooks/useCatImg';
import { useCatFact } from '../../hooks/useCatFact';


const PruebaTecnica = () => {

    const { fact, refreshFact }  = useCatFact();
    const { urlImg } = useCatImg({ fact });

    const handleClick = () => refreshFact();

    return (
    <article className="article-project article-fact-cat">
        <Titulo titulo="Prueba técnica de gatos" />
        <button onClick={handleClick} >Get New Fact</button>
        <div className='container-fact'>
            { fact && <p>{fact}</p> }
            { urlImg && <img src={urlImg} alt='Imagen de gato sacada de la API cataas' />}
        </div>
    </article>
    )
}

export default PruebaTecnica
