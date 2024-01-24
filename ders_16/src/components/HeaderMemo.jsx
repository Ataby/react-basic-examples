import React from 'react'
 
import { useEffect, useMemo, useState } from "react";

const HeaderMemo = () => {
  console.log("render=>Header memo Componenti");
  const [val, setval] = useState(null);

  const factFunc = (n)=>{
    return (n<=1 ? 1 : n * factFunc(n-1));
  }
  const factMemo = useMemo(()=>{
    return factFunc(val);
  },[val]);

  return (
    <div className='bg-danger text-center'>HeaderMemo Componenti sayesinde tekrar hesaplanmadı. | Sonuc: {factMemo} 
    <input type="number" onChange={(e)=>{setval(e.target.value)}} placeholder="Factoriel Num : "/> 
    </div>
  )
}

export default    (HeaderMemo)