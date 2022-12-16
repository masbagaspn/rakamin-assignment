import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import ProductDetails from '../components/ProductDetails'

function Product() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])

    const { id } = useParams()
    
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`

    const getProductById = async(url) => {
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
        getProductById(url)

        return () => {
            setIsLoading(true)
            setError(null)
        }
    }, [url])

    return (
        <>
            {
                isLoading
                    ?
                        <Loader />
                    :
                        error
                            ?
                                <h1>{error}</h1>
                            :
                                <ProductDetails product={product}/>
            }
        </>
    )
}

export default Product