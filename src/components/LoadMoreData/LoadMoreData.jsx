import { useState } from 'react';
import Titulo from '../Titulo.jsx'
import './LoadMoreData.css'
import { useEffect } from 'react';

const LoadMoreData = () => {

    const [ loading, setLoading ] = useState(false);
    const [ products, setProducts ] = useState([]);
    const [ count, setCount ] = useState(0);
    const [ errorMessage, setErrorMessage ] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [count])

    const fetchProducts = async() => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            
            if(data && data.products && data.products.length){
                setProducts(( prevData ) => [...prevData, ...data.products])
                setLoading(false);
            }

        } catch (e) {
            setErrorMessage(e.message);
            setLoading(false);
            console.log(e)
        }
    }

    const handleClick = () => {
        setCount(count + 1);
    }

    if(loading){
        return <div>Loading data! Please wait.</div>
    }

    if(errorMessage){
        return <div>{errorMessage}</div>
    }

    return (
    <article>
        <Titulo titulo="Load More Data"/>
        <div className='load-more-container'>
            <div className='load-more-product-container'>
            {
                products && products.length
                    ? products.map(( product ) => {
                        return(
                            <div key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <p>{product.title}</p>
                            </div>
                        )
                    })
                    : null
            }
            </div>
            <div className='load-more-button'>
                <button onClick={handleClick}>Load More Products!</button>
            </div>
        </div>
    </article>
    )
}

export default LoadMoreData
