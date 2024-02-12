import "./Counter.css";
import {useDispatch,useSelector} from "react-redux"
import reducer from "../../redux/counterReducer";

const Counter = () => {

  //DISPATCH HOOK'U, USE.NAVIGATE GIBI TANIMLANARAK KULLANILIR. 
  //"SEVK ETMEK" ANLAMINA GELDIGI ICIN REDUCER HOOK'UNDAKI SWITCH CASE YAPISINA SEVK EDER.

  const dispatch=useDispatch();
  const counter=useSelector((state)=> state.counter)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button className="counter-button positive"
        onClick={() => dispatch({type:"INCREMENT"})}
        >increase</button>
        <button className="counter-button zero"
        onClick={()=> dispatch({type:"DECREMENT"})}
        >decrease</button>
        <button className="counter-button negative"
        onClick={()=> dispatch({type:"RESET"})}
        >reset</button>
      </div>
    </div>
  );
};

export default Counter;
