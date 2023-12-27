import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card/Card";
import data from "./components/data";

function App() {
  //JS ALANI

  return (
    //JSX ALANINDA JS KOMUTLARI YAZMAK ICIN '{}' KULLANILIR
    <>
      {data.map((item) => {
        //FOR.EACH RETURN DEGERI OLMADIGI ICIN MAP FONK. KULLANILIR.
        const { id, language, img, btnName } = item;
        //JS ALANINDA DESTRUCTURE EDEMEYIZ CUNKU MAP ICINDE ITEM'I KULLANDIK.
        return (
          //SUSLU PARANTEZDEN SONRA ILK IS RETURN EKLEMEK
          //DATA ICINDE ID YOKSA INDEX'LEME KULLANILABILIR.
          <Card key={id} language={language} id={id} img={img} btn={btnName} />
        );
      })}
    </>
  );
}

export default App;
