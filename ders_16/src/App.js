import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";

//USE.CALLBACK: ONCEDEN SAKLANAN BIR FONKSIYON DONDURUR.
//USE.MEMO: ONCEDEN DONDURDUGU FONKSIYONUN DEGERLERINI DONDURUR. 
//MULAKATTA BU CEVAPLAR YETERLI

//USE.MEMO NERELERDE KULLANILIR? : AGIR HESAPLAMALARI ATLAMAK ICIN, COMPONENTLERIN TEKRAR OLUSTURULMASINI ENGELLEMEK ICIN

//stateler her değiştiğinde component render olacağı için alt componentler de yeniden oluşturulur. bunu önlemenin yolu react memo kullanmak. memo bize sadece ilgili componente gönderilen değer değiştiğinde sardığı componenti tekrar render ettirir. faydasız kaldığı yer object tipli verilerdir. onu engellemenin yolu da useMemo kullanmak 

//useMemo
// Shallow comparison’da eğer karşılaştırılan tipler nesne (Object) ise içerisindeki değerleri değil referans değerleri karşılaştırılır. Eğer karşılaştırılan nesneler memory’de aynı adresi gösteriyorsa true, göstermiyorsa false olarak değer döndürür.
// const memoizedValue = useMemo(() => {
//   // Değerin hesaplanması
//   return someExpensiveComputation(a, b);
// }, [a, b]); // Bağımlılıklar dizisi


// Input alanına bir değer girdiğimiz zaman App.js tekrar render edildiği için filteredData tekrar oluşur. filteredData tekrardan oluştuğu için Card componentine göndermiş olduğumuz data her seferinde farklı bir adrese sahip olur. Bu yüzdende React.memo Card componentine ilk seferde göndermiş olduğumuz data array’inin tutulduğu adres ile render edildikten sonra gelen data array’inin farklı adreste bulunduğunu gördüğü için CArd componentini tekrar render eder. Props olarak verdiğimiz array değişmediği halde Card componentinin render edilmesini engelleyebilmek için useMemo kullanabiliriz.

function App() {
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  

  useEffect(() => {
    fetch('https://659a7537652b843dea539125.mockapi.io/api/v1/task')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  //ÜÇ ADIMDA VERI ÇEKME: 1) ILK AÇILIŞTA FETCH ILE URL'DEN VERIYI AL, 2)JSON'A CEVIR, 3)KENDI STATE'INE AKTAR. VARSA DEPENDENCY ARRAY EKLEYEBILIRSIN.
 
  return (
    <div className="container mt-2">
      <div>
        <Header />
        <hr />
        <HeaderMemo />
      </div>
      <hr />
 
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type='text' />
        <button type='button'>Search</button>
      </div>
      <div className="row">
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
