import { useEffect, useState } from "react"
import { getFactOfCat } from "../helpers/getFactOfCat";

export const useCatFact = () => {

    const [ fact, setFact ] = useState();

    useEffect(() => {
        getFactOfCat().then(newFact => setFact(newFact))
    }, [])

    const refreshFact = () => getFactOfCat().then(newFact => setFact(newFact));
        

    return { fact, refreshFact };
}

