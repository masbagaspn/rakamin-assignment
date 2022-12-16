import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'

function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])
    
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

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

    return (
        <div className='w-full flex flex-col gap-4'>
            <h1 className='text-xl font-bold'>Best Seller</h1>
            {
                isLoading
                    ?
                        <Loader />
                    :
                        error
                            ?
                                <span>{error}</span>
                            :
                                product.map((item, index) => <ProductCard key={index} product={item} />)
            }
        </div>
    )
}

export default Home