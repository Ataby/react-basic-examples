import React from 'react'
import Product from "./Product"
import   "../App.css"
import { memo } from 'react'

const Products = React.memo(({products, addtoCart}) => {
  return (
    < >
        <h1>Products</h1>
        <div className='products'>
            {products.map(({name,price})=> (
                <Product key={name} name={name} price={price} addtoCart={addtoCart} />
            ))}
        </div>
    </>
  )
})

export default Products