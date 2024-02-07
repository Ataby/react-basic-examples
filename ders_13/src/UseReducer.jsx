import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

// REDUCER'IN MANTIGI : BIR COK DEGISEN STATE'I TEK BIR ACTION HALINDE TANIMLAYARAK, BU ACTION ICINDE STATE'LERI YUKLEMEK.

const UseReducer = () => {
  //'state' = REDUCER FONKSIYONUNDAKI YAZDIGIMIZ STATE'LERIN TUMU (catImage,error,loading OBJECT FORMATINDA)
  //'dispatch' = DEGISTIRICI FONKSIYONLAR 
  const [state,dispatch] = useReducer(reducer,initialState);

  const {loading,error,catImage}=state;
  // ASAGIDA DOM'DA BUNLARI BASMAK ICIN DESTRUCTURE ETTIK
 
  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    dispatch({type:"start"});
    //REDUCER'A 'action' GONDERMIS OLUYORUZ.
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"success",payload:data[0].url});
      //REDUCER'A 'action' GONDERMIS OLUYORUZ.
      
    } catch (error) {
      dispatch({type:"fail",payload:"DATA CAN NOT BE FETCHED"});
      //REDUCER'A 'action' GONDERMIS OLUYORUZ.
      console.log(error);

    } finally { // TRY.CATCH NASIL BITERSE BITSIN FINALLY BLOGUNA GIRER.
    //   setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading} // LOADING VARSA BUTTON DISABLED OLUR.
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducer;
