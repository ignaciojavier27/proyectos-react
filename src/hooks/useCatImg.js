import { useState, useEffect } from 'react'
import { getUrlOfImgCat } from '../helpers/getUrlOfImgCat';

export const useCatImg = ({ fact }) => {

    const [ urlImg, setUrlImg ] = useState();

    useEffect(() => {
        if ( !fact ) return;
        const threeFirstWords = fact.split(" ").slice(0,3).join(" ");
        getUrlOfImgCat(threeFirstWords).then(newUrlImg => setUrlImg(newUrlImg))
    }, [fact])

    return { urlImg }
}
