import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
  import {Provider} from "react-redux";
 import {store} from "./redux/combinedReducer"

function App() {
  //REDUX : GLOBAL STATE YONETIM KUTUPHANESIDIR. GLOBAL STATE SAYISI FAZLA OLACAK ISE USE.CONTEXT YERINE REDUX DAHA MANTIKLI

// const store = createStore(counterReducer);
// const store2= createStore(todoReducer);
//1- Create aşaması 'context'teki gibi  

  return (
    <div className="app">
      <Provider store={store} > {/* 2- Sarmalama aşaması(Providing)  */}
      <Counter />
      <Todo   />
      </Provider>
    </div>
  );
}

export default App;
