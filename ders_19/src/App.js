import logo from './logo.svg';
import './App.css';
import  {useRef,useEffect} from "react"

function App() {
  const inputRef= useRef( );
  const divRef = useRef();

  useEffect(() => {
    console.log(inputRef)
    //DOM'DAKI TUM ELEMENTLERE ULASMAK ICIN KULLANILIR.
     
  }, [ ])

  const onFocus = function(){inputRef.current.focus();}
  const drawBorder = function(){divRef.current.style.border="2px solid red"} 
  
  return (
    <div className="App" ref={divRef}>
        <h2>React Course_19</h2>
        <input ref={inputRef} />
        <button onClick={onFocus} >Input Focus </button>
        <button onClick={drawBorder} >Draw Border</button>

    </div>
  );
}

export default App;
