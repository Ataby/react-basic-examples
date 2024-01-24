import "./App.css";
import Counter from "./components/counter/Counter";
// import Todo from "./components/todo/Todo";
import {createStore} from "redux"
import reducer from "./redux/reducer";
import {Provider} from "react-redux";
import counterReducer, { initialState } from "./redux/reducer";

function App() {
  //REDUX : GLOBAL STATE YONETIM KUTUPHANESIDIR. GLOBAL STATE SAYISI FAZLA OLACAK ISE USE.CONTEXT YERINE REDUX DAHA MANTIKLI

const store = createStore(counterReducer);
//1- Create aşaması 'context'teki gibi  

  return (
    <div className="app">
      <Provider store={store} > {/* 2- Sarmalama aşaması(Providing)  */}
      <Counter />
      {/* <Todo /> */}
      </Provider>
    </div>
  );
}

export default App;
