import logo from "./logo.svg";
import "./App.css";
import Message from "./message";
import Person from "./person";
import data from "./data";

function App() {
  return (
        <div>
           {data.map((item)=>(
            <Person name={item.name} tlf={item.tel} img={item.img}/>
           ))}
        </div>
    // <div>
    //   <Person name={data[0].name} img={data[0].img} tlf={data[0].tel} />
    //   <Person name={data[1].name} img={data[1].img} tlf={data[1].tel} />
    //   <Person name={data[2].name} img={data[2].img} tlf={data[2].tel} />
    // </div>
  );
}

export default App;
