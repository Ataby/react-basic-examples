//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import {useState} from 'react'; //ILK BASTA IMPORT EDILMELIDIR. 'USE' ILE BASLAYANLAR IFADELER HOOK'TUR.

const UseStateCounter = () => {
  //* useState en cok kullanilan Hook'tur.
  //* Bir state'in ilk degerinin degisken, dizi ve obje ile kullanilabilmesine olanak saglar.
  //? useState hook'u bir dizi dondurur.Bu dizi, array.destructure ile acilabilir.
  //?  Acilan dizinin 1.elemani state degiskenidir.
  //?  2.si ise state'i degistirmeye izin veren bir setter metodudur.
  //? useState parametre olarak state'in ilk degerini alir.
    
    const [count, setCount] = useState(0); // 1.deger variable, 2.deger metot (=>array destructure yaptık)

    const inc=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        setCount(count-1);
    }

    const init=()=>{
        setCount(0);   
        //SATIR ICINDE CALLBACK YAPILMALI KI SONSUZ DONGUYE GIRMESIN.SADECE TIKLANILDIGINDA CALISSIN
    }

    const [person, setPerson]=useState({
        name:"John", surname:"Doe", age:43
    })

    const incAge=()=>{
        // setPerson(person.age+1)
        //BU SEKILDE BIR ATAMA ILE SAYISAL DEGER, STATE'IN UZERINE YAZILMIS OLUR.
        setPerson({name:"John", surname:"Doen", age: 44 });
        // setPerson({ ...person, age: person.age + 1});
        //IKI IFADE DE DOGRUDUR.
        
    }
    
  return (
    <div>
        <div className="container text-center mt-2 border border-5">
            <h2>USE.STATE HOOK</h2>
            <h2 className ="display-4 text-danger">Count: {count} </h2>
            <button onClick={inc} className="btn btn-success">increment</button>
            <button onClick={dec} className="btn btn-danger">decrement</button>
            <button onClick={init} className="btn btn-warning">initialize</button>
        </div>
        <div className="container text-center mt-2 border border-5">
            <h2>USE.STATE OBJECT</h2>
            <h4>{person.name} {person.surname} {person.age}</h4>
            <button onClick={incAge} className="btn btn-success">increment</button>
        </div>
    </div>
  )
  }

  export default UseStateCounter;