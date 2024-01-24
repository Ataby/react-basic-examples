import React from 'react'
import Product from "./Product"

const Cart = ({cart,emptyCart}) => {
  return (
    < >
        <h1>
            Sepetiniz  <button onClick={emptyCart}> sepeti boşalt</button>
        </h1>
        <div className='products'>
            {cart.map(({name,price},index)=> (
                <Product key={index} name={name} price={price}/>
            ))}
        </div>
    </>
  )
}

export default Cart