import axios from "axios";
import { useDispatch } from "react-redux";
import {fetchStart,fetchFail,loginSuccess,logoutSuccess} from "../features/authSlice"
 
 const BASE_URL = "https://clarusway.pythonanywhere.com/";

 const useAuthCall = () => {
     const dispatch = useDispatch();
     //HOOK'LAR ANCAK BIR REACT COMPONENT ICINDE KULLANILIR YADA CUSTOM BIR HOOK ICINDE KULLANILABILIR. KLASIK BIR JS DOSYASI ICINDE KULLANILMAZ
     
     const login = async(userInfo)=> {
         try {
             dispatchEvent(fetchStart());
             const {data} = await axios.post(`${BASE_URL}account/auth/login/`,userInfo);
             dispatch(loginSuccess(data))
            //DATA'YI LOGIN.SUCCESS ICINE PARAMETRE OLARAK GONDERELIM KI CURRENT.USER GUNCELLENSIN.
         } catch (error) {
             console.log(error  )
             dispatchEvent(fetchFail())
         }
     }

     const logout = async(userInfo)=> {
        //LOGIN YAPILIRKEN API BIR KEY VERIYOR.LOGOUT YAPARKEN API BIZE AYIRDIGI KAYNAKLARI SALIVERIYOR. O YUZDEN BACKEND TARAFINDA LOGOUT YAPMAK MANTIKLI
         try {
             dispatchEvent(fetchStart());
             await axios.post(`${BASE_URL}account/auth/logout/`);
             dispatch(logoutSuccess( ));
            //DATA'YI LOGIN.SUCCESS ICINE PARAMETRE OLARAK GONDERELIM KI CURRENT.USER GUNCELLENSIN.
         } catch (error) {
             console.log(error  )
             dispatchEvent(fetchFail())
         }
     }
      
   return {login,logout};
   //HERYERDE GECERLI BIR FONSKIYON YAZACAKSAK EN GUZEL YONTEMI CUSTOM HOOK'TUR.
 }
 
 export default useAuthCall
