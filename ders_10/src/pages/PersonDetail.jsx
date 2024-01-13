import React from 'react'
import { useParams,useLocation,useNavigate } from 'react-router-dom'
import {useState,useEffect} from "react";
import NotFound from './NotFound';
//PERSON DETAIL'IN YANI BIR SAYFADA AYRINTILARINI GOSTERMEK ISTEDIGIMIZ ICIN PAGES ACTIK. EGER AYNI SAYFADA GOSTERMEK ISTESEYDIK COMPONENT ICINE YERLESTIRIRDIK.

const PersonDetail = () => {
    const navigate =useNavigate();
    const {id}=useParams(); // TIKLANAN ITEM ICIN YENI SAYFA AC.
    console.log(id);
    
    // const {state: person} = useLocation();// TIKLANAN ITEM BILGILERINI BU SAYFAYA AKTAR. FAKAT ON.CLICK EVENT'I ILE YONLENDIRDIGI ICIN DIREK LINK ADRESINI GIREREK BURAYA ULASAMAYIZ.
    // console.log(person);

    const [person, setPerson] = useState("");
    const [error, seterror] = useState(false)
    // const navigate = useNavigate();

    const getPerson = () => {
        fetch(`https://reqres.in/api/users/${id}`)
          .then((res) =>{
          if(!res.ok){
            seterror(true)
            throw new Error("Something went wrong.");
            //THROW'DAN SONRA DIREK 'CATCH'  KISMINA ATLAYACAGI ICIN 'SET' METODU USTE YAZILDI.
          }
          //SUSLU PARANTEZ ACILDIGI ICIN AUTO RETURN KAYBOLUR.
          return res.json();})
          .then((data) => setPerson(data.data))
          .catch((err) => console.log(err));
      };

      useEffect(() => {
        getPerson();
      }, []);

  if (error){
    return <NotFound/>; //JSX'DE COMPONENTIN MUHAKKAK "RETURN" DONDURMESI GEREKIR.
  }else if (!person) { //EGER ERROR YOKSA AMA 'PERSON' OBJESI HENUZ BOS ISE 'LOADING MESAJI GOSTER.'
      return <div className='text-center'>
        <h3> Data Loading...</h3>
      </div>
  }else{
    return (
      <div className='container text-center text-danger bg-light p-3'>
        <img src={person.avatar} alt="" className='rounded'/>
        <h3>
            {person.first_name} {person.last_name}
        </h3>
        <p>{person.email}</p>
        <div>
        <button onClick={()=>navigate("/")} className="btn btn-danger me-3" style={{backgroundColor:"purple"}}>Home</button>
        <button onClick={()=>navigate(-1)} className="btn btn-warning text-white">Go Back</button>
      </div>
    </div>
    )
  }
}

export default PersonDetail