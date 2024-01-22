 import './App.css';
import { useEffect } from 'react';
import {signIn, signUp} from "./config/firebase" 
 import RouterPages from './config/Router';

function App() {
//SIGN.UP ASYNC FONKSIYON OLDUGU ICIN '.THEN' ILE BASKA ISLEMLER YAPABILIRIZ.
  // useEffect(() => {
  //   signUp ("Michale","michale@mail.com","111222")
  //   .then(()=> { console.log("done")})
  //   .catch((error)=>{console.log(error)})
  
  // }, [ ])

  // useEffect(() => {
  //   signIn ("mifdghale@mail.com","221222")
  //   .then(()=> { console.log("done")})
  //   .catch((error)=>{console.log(error)})
  
  // }, [ ])

  return (
   <>
      <h1>application!!</h1> 
      <RouterPages/>
   </>
 
  );
}

export default App;
