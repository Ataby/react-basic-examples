//NORMALDE EVENT'LAR BROWSER'LARIN API'LERI TARAFINDAN KONTROL EDILEN OLAYLARDIR.
//SENTETIK EVENTLAR(REACT EVENTLARI) ISE BROWSER EVENTLARINI ALIP SARMALLIYOR (WRAP)
//REACT, DOM'DAKI EVENTLARIN PERFORMANSINI ARTIRMAK ICIN VE KULLANIMI BASITLESTIRMEK ICIN KENDINE UYARLIYOR (SARMALLIYOR)
// SAF JS GIBI EVENT YAKALAMA YOK. EVENT'LARI FONKSIYON OLARAK TANIMLANMASI YETERLI.

import 'bootstrap/dist/css/bootstrap.min.css';
//REACT-BOOTSTRAP SAYFASINDAN IMPORT CSS KODUNU VE 'YARN ADD BOOTSTRAP' KODUNU EKLIYORUZ.

import Events from "./components/Events";
import Counter from './components/Counter';
import UseStateCounter from './components/StateHooks';

function App() {
  return (
    <div className="App">
      <Events/>
      <Counter/>
      <Counter count={2}/>
      <UseStateCounter/>
    </div>
  );
}

export default App;
