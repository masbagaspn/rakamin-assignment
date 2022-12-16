import React from 'react'

function ProductDetails({product}) {
  return (
    <article className='w-full flex flex-col justify-between rounded-lg'>
        <div className='rounded-lg overflow-hidden shadow-lg'>
            <img 
                className='w-full object-cover'
                src={product.images[0].imageUrl}
                alt={product.name}
            />
        </div>
        <div className='w-full px-4 pt-2 pb-4 flex flex-col gap-2'>
            <h1 className='text-2xl text-blue-700 font-bold'>{product.name}</h1>
            <span className='font-bold'>${product.price}</span>
            <p className='text-xs'>{product.description}</p>
        </div>
    </article>
  )
}

export default ProductDetails