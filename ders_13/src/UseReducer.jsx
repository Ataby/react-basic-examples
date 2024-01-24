import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const UseReducer = () => {
//   const [catImage, setCatImage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
  //LOCAL STATE'LER ARTTIKCA BUNLARI AZALTMAYA YARAYAN HOOK, REDUCER HOOK'UDUR.

  const [state,dispatch] = useReducer(reducer,initialState);
  //ILK DONDURULEN 'state' = REDUCE FONKSIYONUNDAKI YAZDIGIMIZ STATE'LERIN TAMAMI(OBJECT FORMATINDA)
  //IKINCI DONDURULEN 'dispatch' = DEGISTIRICI FONKSIYONLAR 

  const {loading,error,catImage}=state;
  // ASAGIDA DOM'DA BUNLARI BASMAK ICIN DESTRUCTURE

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true); = BUNUN YERINE ARTIK 'dispatch' KULLANACAGIZ.
    dispatch({type:"start"});
    //REDUCER'A 'action' GONDERMIS OLUYORUZ.
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setCatImage(data[0].url);
      // setError("");
      dispatch({type:"success",payload:data[0].url});
      //REDUCER'A 'action' GONDERMIS OLUYORUZ.
      
    } catch (error) {
      //  setError("DATA CAN NOT BE FETCHED");
      //  setCatImage("");
      dispatch({type:"fail",payload:"DATA CAN NOT BE FETCHED"});
      //REDUCER'A 'action' GONDERMIS OLUYORUZ.
      console.log(error);

    } finally { // TRY.CATCH NASIL BITERSE BITSIN FINALLY BLOGUNA GIRER.
    //   setLoading(false);
    }
  };
  console.log(error);
  console.log(catImage);

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
