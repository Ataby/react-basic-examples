import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginProvider";
import { useState,useContext } from "react";
import PrivateRouter from "./pages/PrivateRouter";
import LoginProvider from "./context/LoginProvider";


  //CONTEXT API : GLOBAL STATE PAYLASIMI SAGLAYAN BIR API YANI INTERFACE(MANAGEMENT). PROP DRILLING'IN ZOR OLDUGU YERLERDE KULLANILIR. USE.STATE'LER ILE BIRLIKTE DE KULLANILABILIR. 

  //BIR STATE, BAGLI OLMAYAN IKI SAYFA ICERISINDE KULLANILACAKSA BU STATE'I LIFTING-UP ILE IKI SAYFANIN ORTAK PARENT'INA VERIRIZ. PROP YONTEMIYLE DE CHILD ELEMENTE GONDERIRIZ.(PROP DRILLING(bir bileşenden diğerine veri aktarmak için props'ları birçok bileşen arasında iletmek demektir)).
  
  //VERIYI ALTTAN YUKARIYA GONDERMEK ICIN BIR YONTEM : FONKSIYONU USTTE TANIMLAYIP, CHILD'DA KULLANIRSAK DOLAYLI OLARAK VERIYI USTE TASIMIS OLURUZ.
  
  //FLOOD: TUM VERILERIN BIR ANDA AKMASI VEYA DEGISMESINE DENIR. MESELA LANGUAGE DEGISIMI. BOYLE ORTAMLARDA CONTEXT API KULLANILIR(ORTAK HAVUZ GIBI). DEGISKENLER KENDILERIYLE ILGILI KISIMLARI BURALARDAN DIREK ERISIMLE ALABILIRLER. MESELA "LOGIN, THEME, LANGUAGE" GIBI FLOOD OLAN YERLERDE(DYNAMIC DEGIL,STATIC GIBI NEREDEYSE) CONTEXT API KULLANMAK MANTIKLI. AMA SUREKLI DEGISIM OLAN DYNAMIC YERLERDE "REDUX" KULLANILIR.

  //Redux, büyük ve karmaşık uygulamalar için daha uygundurken, Context API daha küçük veya orta ölçekli uygulamalar için daha uygun olabilir.(CHAT GPT)

  //CONTEXT API ASAMALARI : 
  //1) CREATE EDILMESI: "export const loginContext= createContext();"
  //2) SARMALANMASI: 
                  // <loginContext.Provider value{{user,SetUser}}> 
                  // <APP/> (tum childler bu value degerlerıne erısebılır.)
                  // </loginContext.Provider>
  //3)CONSUMING: const {user,setUser}=useContext(LoginContext);
  function App() {
    const [user, setuser] = useState("");
    // BU TANIMLANAN STATE DISARIDAN CONTEXT OLARAK SARMALLANDIGI ICIN TUM CHILD ELEMENTLER ERISEBILIR.
    //'LOGIN' SAYFASINDAKI STATE ILE AYNI ISME SAHIP ANCAK BIRBIRINDEN BAGIMSIZ VE FARKLI STATE'LER.
    //LOGIN.PROVIDER OLUSTURDUGUMUZ ICIN BU STATE ORADA TANIMLANDI, BURADA GEREK YOK. AYRICA 'CONTEXT.PROVIDER' SARMALINI DA DEGISTIRIYORUZ.
  return (
    <LoginContext.Provider value={{user,setuser}}> 
    {/* <LoginProvider > */}
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="people" element={<PrivateRouter />} >
          <Route path="" element={<People/>}/>
          <Route path=":id" element={<PersonDetail />} />
        </Route>


        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* // </LoginProvider> */}
    </LoginContext.Provider>
  );
}

export default App;
