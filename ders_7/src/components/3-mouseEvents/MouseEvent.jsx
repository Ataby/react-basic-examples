import { useState } from "react";
const MouseEvent = () => {
  const [Showhint, setShowhint] = useState(false);

  const [toggle, setToggle] = useState(false);
  const handleDouble = (e) => {
    setToggle(!toggle);
    toggle 
    ? e.target.className="bg-success text-light w-50 p-4 mt-4" 
    : e.target.className="bg-warning text-light w-50 p-4 mt-4" ;
    //className KULLANILIRSA TUM ISIM EKLENMELI
    //classList KULLANILACAKSA TEK KELIME EKLENEBILIR
  };
 
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();
  const handleMove =(e)=>{
    setCoordX(e.nativeEvent.offsetX);//GORECELI KONUM
    setCoordY(e.nativeEvent.offsetY);

    // setCoordX(e.pageX);//MUTLAK KONUM
    // setCoordY(e.pageY);
  }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => setShowhint(true)}
        onMouseOut={() => setShowhint(false)}
      >
        todo item 1{Showhint && <p>Hello React</p>}
      </div>

      <div
        id="todo-2"
        className="bg-success text-light w-50 p-4 mt-4"
        onDoubleClick={handleDouble}
      >
        todo item 2
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4" onMouseMove={handleMove}>
        todo item 3
      </div>

      <p>X and Y</p>
      <p className="text-danger fw-bold">{coordX}, {coordY}</p>
    </div>
  );
};
export default MouseEvent;
