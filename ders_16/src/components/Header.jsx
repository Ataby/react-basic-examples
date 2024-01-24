import React from 'react'
import {   useState } from "react";

 
const Header = () => {
  console.log("Render => Header component")
  const [count, setCount] = useState(0)

  //'MEMO' PARANEZINE ALINCA SADECE ILGILI KISMI RENDER EDIYOR. TEKRAR VERI CEKME VS YAPMIYOR.
  return (
    <div className='bg-warning text-center'>Header Componenti
      <p>{count}</p>
      <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default  (Header);