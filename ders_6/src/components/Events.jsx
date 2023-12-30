// ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
// sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
// kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
// bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
// React ortaminda kullanilan event'larin bilindik tarayicilarda
// sorunsuz calismasini saglanir.

import { Button } from "bootstrap";

//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let message="EVENT BASED PROGRAM";

  const handleClick = function () {
    alert("Button clicked");
  };//EGER PARAMETRE ALMASI GEREKEN BIR EVENT ISE JSX ICINDE'CALLBACK' TARZINDA CAGIRILMASI GEREKIR.

  const handleClear = function (msg) {
    alert(msg);
    //EVENT ICERISINDEKI FONKSIYONUN BIR PARAMETRESI YOKSA DIREK REFERANS ILE CAGIRILABILIR.
  };

  const handleChange=function(e){
    console.log(e.target);
    message="REACT";
  }

  return (
    <div className="container text-center mt-3">
      <h2>{message}</h2>
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button> 

      <button
        onClick={()=>handleClear("Clear btn is clicked")}
        className="btn btn-dark">Clear</button>

      <button className="btn btn-warning" onClick={handleChange}> Change</button>

    </div>
  );
};

export default Events;
//REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul eder.

//* React DOM islemlerini minimize etmek icin bunu yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.

//? 1. Statefull Classes (Class Components). MULAKATLARDA BANKO SORULUR!!!
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.

