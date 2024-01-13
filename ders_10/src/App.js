import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Path from "./pages/Path";
import {Router,Route,Routes,Link,Navigate} from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Aws from "./pages/Aws";
import Fullstack from "./pages/FullStack";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

//CLIENT SIDE ROUTUNG (CLS): ROUTING ISLEMLERININ CLIENT TARAFINA VERILMESI. YANI ZIPLENMIS HAM SEKILDE DOSYALARI GONDERIYOR. CLIENT BUNLARI PARSE EDIP DERLEYIP KENDI BROWSER'INDA CALISTIRYOR VE ROUTING YAPIYOR(CLIENT ICINDE). DEZAVANTAJI ILK ACILISTA BIR MIKTAR VAKIT ALABILIR.
//SERVER SIDE ROUTING(SSR): ESKIDEN HERSEYI SERVER TARAFI ICRA EDIYORDU. HTML,CSS,JS KODLARINI ACIP PARSE EDIP DERLEYIP CALISTIRILABILIR HALLERINI GSUREKLI GONDERIYORDU. YANI CALISAN HAZIR SITEYI RESPONSE EDIYORDU.
//LAZY LOADING: IMPORT EDILECEK DOSYAYI ILK ACILISTA DEGIL DE, TIKLANILDIGINDA IMPORT ETMEKTIR. ACILIS SURESI BOYLECE KISALMIS OLUR.
//REACT TEMELINDE: 3RD PARTY KUTUPHANELER HARICINDE, COMPONENT YAPISI, COMPONENTLER ARASINDA VERI DEGIISMI SAGLAYAN PROPS'LAR, STATE KAVRAMI, FUNCTION BASED PROGRAMMING'DE USE.STATE HOOK'LARI, GLOBAL STATE MANAGEMENT DEDIGIMIZ CONTEXT API VAR.
//MULAKATTA KESINLIKLE API'DEN VERI CEK, EKRANDA RENDER ET DIYE MUHAKKAKK SORULUR.


function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={ <Home />} /> */}
        <Route index element={ <Home />} />
        <Route path="people" element={ <People />} />
        <Route path="people/:id" element={ <PersonDetail />} />

        <Route path="paths" element={ <Path />} >
            <Route index element={<Fullstack/>}/>
            <Route path="fullstack" element={<Fullstack/>}/>
            <Route path="aws" element={<Aws/>}/>
        </Route>
        
        <Route path="*" element={ <NotFound />} />  

        <Route path="contact" element={<PrivateRouter/>}>
          <Route path="" element={<Contact />} />
          {/* CONTACT SAYFASINI GUVENLIKLI 'PRIVATE' SAYFASI SEKLINDE OLUSTURDUK. BU PARENT ASLINDA BIR FILTRE GOREVI GORUYOR. */}
        </Route>
        <Route path="login" element={<Login/>}/>


        {/* <Route path="*" element={ <Home />} />      */}
        {/* HOME SAYFASINA YONLENDIRINCE SANKI BOZUK LINKE GITMIS GIBI GOZUKUYOR. O YUZDEN BU KULLANIM MANTIKLI DEGIL */}
        
        {/* <Route path="*" element={ <Link to={"/"}  />} /> */}
        {/* BU DA DOGRU CALISMIYOR. "use.navigate" DE CAGRILMAZ CUNKU HOOK'LAR COMPONENT SEVIYESINDE CAGRILMAZ. USE.EFFECT VEYA EVENT ICINDE ISEK KULLANILABILIR.      */}

        {/* <Route path="*" element={ <Navigate to="/"  />} />   */}
        {/* REDIRECT ISLEMLERI ICIN "NAVIGATE" COMPONENTI KULLANILIR.  */}

        {/* TUM PATH STATIC OLARAK BELIRTILMISSE BUNA "ABSOLUTE PATH" DENIR. DOLAYLI BELIRTILEN PATHLERE "RELATIVE PATH" DENIR. */}

      </Routes>
      <Footer />
    </>
  );
}

export default App;
