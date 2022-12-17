import React from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import { useGetRequest } from '../hooks/httpRequest'

function Home() {    
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`

    const { isLoading, error, product } = useGetRequest(url)

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