import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";


function App (){ 
  //useMemo: useMemo, bir değeri (hesaplanmış bir değer) ve bağımlılıklarınızı belirtmek için kullanılan bir React hook'udur. Bu hook, genellikle maliyetli hesaplamaları yaparken veya bir değeri tekrar tekrar hesaplamak yerine bir önceki hesaplamanın sonucunu kullanmak istediğinizde kullanılır. useMemo sayesinde, belirtilen bağımlılıklar değişmediği sürece, fonksiyon yalnızca bağımlılıkların değiştiği durumlarda yeniden çalıştırılır.

  //memo: memo, bir React bileşenini memoize etmek için kullanılan bir fonksiyondur. Bunu kullanarak, bir bileşenin yalnızca giriş props'ları değiştiğinde yeniden render edilmesini sağlayabilirsiniz. Bu, gereksiz render işlemlerini önleyerek performansı artırabilir.

  //Kısacası, useMemo genellikle bir değeri hesaplamak ve bellekte saklamak için kullanılırken, memo bir bileşeni memoize etmek ve gereksiz render işlemlerini önlemek için kullanılır.

  //ANLADIGIM: USE.MEMO FONKSIYONUN PARAMETRESI DEGISMEDIGI ZAMANLARDA KULLANILIYOR. MEMO ISE AYNI SEYI TEKRAR RENDER ETMEMESI ICIN KULLANILIYOR.
  return (
    <>
    <Main/>
    </>
  );
}

export default App;
