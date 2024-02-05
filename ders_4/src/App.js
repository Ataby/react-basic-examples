import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
import data from "./components/data";

function App() {
  //JS ALANI

  return (
    //JSX ALANINDA JS KOMUTLARI YAZMAK ICIN '{}' KULLANILIR
    <>
      {data.map((item,index) => {
        //FOR.EACH RETURN DEGERI OLMADIGI ICIN MAP FONK. KULLANILIR.
        const { id, language, img, btnName } = item;
        //JS ALANINDA DESTRUCTURE EDEMEYIZ CUNKU MAP FONKSIYONUNUN PARAMETRESI OLARAK ITEM'I KULLANDIK.

        return (
          //SUSLU PARANTEZDEN SONRA ILK IS RETURN EKLEMEK
          //DATA ICINDE ID YOKSA INDEX'LEME KULLANILABILIR.
          <Card key={index} language={language} id={id} img={img} btn={btnName} />
          // FARKLI TURDE PROP'LAR GONDERILEBILIR.
        );
      })}
    </>
  );
}

export default App;
