import { createContext, useContext, useState } from "react";
 

//1- Creating LoginContext
export const LoginContext = createContext(); 

// 2- Providing: Dosyanın adı 'Provider' iceriyorsa Context dosyasıdır.
const LoginProvider = ({children}) => {
  //DEFAULT OLARAK HER PROVIDER'DA OLAN OZELLIK
  // VEYA (props.children) SEKLINDE YAZILABILIR.
  const [user,setuser]=useState("");  
  const values= {user,setuser};            
  return (
    <LoginContext.Provider value={values }>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;

// 3- Yazdığımız bir hook, başka bir hokk'u çağırıyorsa buna "custom hook" denir. Mutlaka 'use' ile başlaması gerekir.
export const useLoginContext =()=>{
  return useContext(LoginContext);
}