import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY='834589bea170469cbd4d9dee6fd46785'
const singlehUrl =
`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12&tags=vegetarian`

const url = singlehUrl;

const useFetch = (query, type = false) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [isError, setIsError] = useState(false)
    

    useEffect(() => {
        (async(query)=> {
        setIsError(false)
        setIsLoading(true)
        try{
        const response = await axios.get(`${url}${query}`)
        setData(response.data)
        console.log(response);
        }catch (err){
        setIsError(true);
        
        }
        setIsLoading(false)
        })(query)
    }, [url, query])
    
    return{
        isLoading, data,isError
    };
} 

export default useFetch;