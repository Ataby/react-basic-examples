import React from 'react'
import   "../App.css"
import { memo } from 'react'

const Product = memo(({name,price,addtoCart}) => {
  return (
    <div className='product'>
        <h2>{name}</h2>
        <h3>{price} TL</h3>
        {addtoCart && (
            <button onClick={()=> addtoCart({name,price})} >Sepete Ekle </button>
        )}
    </div>
  )
})

export default  (Product)