import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
      <article className='w-full h-[300px] flex flex-col justify-between rounded-lg bg-white shadow-lg overflow-hidden'>
          <div className='h-1/2 w-full overflow-hidden'>
            <Link to={`/products/${product.id}`}>
              <img 
                  className='w-full object-center'
                  src={product.images[0].imageUrl}
                  alt={product.name}
              />
            </Link>
          </div>
          <div className='w-full px-4 pt-2 pb-4 flex flex-col gap-2'>
            <Link to={`/products/${product.id}`}>
              <h2 className='text-lg text-blue-700 font-bold'>{product.name}</h2>
            </Link>
            <span className='font-bold'>${product.price}</span>
            <p className='text-xs'>{product.description}</p>
            <Link 
              to={`/products/${product.id}`}
              className='self-end text-xs hover:text-blue-400'
            >
              {`Details >`}
            </Link>
          </div>
      </article>
  )
}

export default ProductCard