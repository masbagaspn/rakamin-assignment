import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import ProductDetails from '../components/ProductDetails'
import { useGetRequest } from '../hooks/httpRequest'

function Product() {
    const { id } = useParams()
    
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`

    const { isLoading, error, product } = useGetRequest(url)

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