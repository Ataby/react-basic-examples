import { useState } from 'react';
import Products from './Products';
import Cart from './Cart'; 
import   "../App.css"
import { useCallback } from 'react';


 const phones= [
  {name:"IPhone 14 Pro", price:54000},
  {name:"Galaxy S23", price:35000},
  {name:"Galaxy A34", price:13000},
  {name:"Huawei P40", price:42000},
 ]

function Main() {
 
  const [products] = useState(phones);
  const [cart,setcart] = useState([]);

  const addtoCart = useCallback((product)=>{
    setcart ((cart)=> [...cart,product])},[])
//USE.CALLBACK ((item)=> {function},[dependency array])

//   const addtoCart = useCallback(function(product){
//     setcart ((cart)=> [...cart,product])},[])
// FUNCTIO EXPRESSION ILE YAZIMI
  

  const emptyCart=useCallback (function(){
    setcart([]);
  },[])

  return (
    <div className='wrapper'>
        <Products products={products} addtoCart={addtoCart}/>
        <Cart cart={cart} emptyCart={emptyCart} />
    </div>
  )}
  export default Main
