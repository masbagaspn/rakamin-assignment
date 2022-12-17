import {useEffect, useState} from 'react'
import axios from 'axios'

export function useGetRequest(url){
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])

    const getProducts = async(url) => {
        try{
            setIsLoading(true)
            const response = await axios.get(url)
            const data = await response.data
            setProduct(data)
        }
        catch{
            setError('Something went wrong.')
        }
        finally{
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        getProducts(url)

        return () => {
            setIsLoading(true)
            setError(null)
        }
    }, [url])

    return { isLoading, error, product }
}