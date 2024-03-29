// LIFE.CYCLE METOTLARI COMPONENTLERIN DOM'DA VAROLDUGU SURE BOYUNCA UZERINDE ISLEM YAPMAMIZA IMKAN SAGLAYAN REACT METODUDUR.

//LIFE.CYCLE METOTLARI CLASS COMPONENT'LERE OZELDIR.

//REACT ORTAMINDAKI BIR COMPONENTIN DOGUMUNDAN OLUMUNE KADAR OLAN SURECI YONETEN SISTEME LIFE.CYCLE DENIR.

//ORN: COMPONENT OLUSTURULDUGUNDA, DOM'A BASILDIGINDA, GUNCELLENDIGINDE VEYA DOM'DAN KALDIRILDIGINDA BIR SEYLER YAPMAK ICIN LIFE.CYCLE METOTLARI KULLANILABILIR. EN BILINDIK ORNEGI "RENDER()"DIR.

//MULAKATLARDA BANKO!!
//CONSTRUCTOR: CLASS'LARDA KURUCU METOT'TUR. OBJENIN ICINDEKILERI OLUSTURUR(STATE,VALUE,SUPER.PROPS,INHERITANCE,BINDING,FUNC. VS.).

//RENDER(): HTML ELEMENTLERINI BROWSER'I ACIP DOM'A BASAN METOTTUR. SADECE CLASS COMPONENTLERDE KULLANILIR. FONKSIYON TABANLI BILESENLERDE DIREK JSX YAZILIR.(BEBEGIN DOGUMU GIBI..).

//COMPONENT.DID.MOUNT: ILK RENDER'DAN SONRA YANI COMPONENT OLUSTURULDUKTAN SONRA ILK YAPILACAK ISLEMLERI BURANIN ICINDE YAPIYORUZ.OZELLIKLE API ISTEKLERINI BASLATMAK ICIN KULLANILIR. (ORN: BEBEGE ISIM VERILMESI GIBI..).

//componentDidMount metodunun fonksiyonel bileşenlerdeki karşılığı "useEffect" hook'udur.

//COMP.DID.MOUNT ICERISINDE(VEYA CLASS COMPONENTLERDE) HERHANGI BIT STATE, SET.STATE METODU ILE GUNCELLENIR.

//GERCEKLESME SIRASI(MOUNTING): "CONSTRUCTOR => RENDER() => COMPONENT.DID.MOUNT()".

//UPDATING : "RENDER() => COMPONENT.DID.UPDATE()".

//COMPONENT.DID.UPDATE: ILK RENDER HARIC TUM RENDER'LARDAN SONRA CALISIR. DAHILI OLARAK PARAMETRE ALABILIR. "PREV.PROP" VE "PREV.STATE" ILE STATE'LERIN VE PROP'LARIN ONCEKI HALLERINI ALABILIR.

//UPDATE ICINDE BIR SEY GUNCELLEMEK RENDER'I TETIKLER. RENDER'DAN SONRA TEKRAR UPDATE CALISTIGI ICIN KISIR DONGUYE GIREBILIR.

//COMPONENT.WILL.UNMOUNT: BIR COMPONENT DOM'DAN KALDIRILDIKTAN HEMEN SONRA COMP.WILL.UNMOUNT CALISIR. CUNKU MESELA ZAMANI BITEN TIMER, ARKA TARAFTA HALA CALISMAYA DEVAM EDER. SADECE DOM'DAN KALDIRMAK DEGIL CLEAN INTERVAL YAPMAK DA GEREKLIDIR.  ORN: BASLAYAN TIMER'I KALDIRMAK, NETWORK ISTEGI BITTIYSE KALDIRMAK.

//FUNCTIONAL COMPONENT'LERDE COMP.DID.MOUNT(),COMP.DID.UPDATE() YAPAR MISIN ? LIFE.CYCLE'DA CLEANUP()'IN KARSILIGI NEDIR?

import React from "react";

class LifeCycleMethods extends React.Component {
  //REACT COMPONENT'LERDE STATE VARSA, STATE'YE BASLANGIC DEGERI VERMEK ICIN CONSTRUCTOR KULLANMAK GEREKIYOR.
  // 1-) Bir componentin olsuturulmasinda cagrilir
  constructor(props) {
    console.log("constructor ıs runnıng");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //! 3-) Bir component DOM agacina eklendiginde calistirilir.
  //! (İlk render sonrasi).
  //! Her yasam dongusu icin bir kere calisir.
  componentDidMount() {
    console.log("Mounted");
  }
  
  // 4-) Bu metot ilk render haric diger tüm render'lardan sonra cagrilir.
  //  prevState ve prevProps degerlerini parametre olarak alabilir.
  // parantez icine iki deger de
  componentDidUpdate(prevProps,prevState) {
    console.log("updated");
    // console.log(prevState.count);
  }
  
  
    //! 5-) Bir component DOM agacindan kaldiriltiktan hemen sonra cagirlir.
    componentWillUnmount() {
      console.log("Unmounted");
    }

  render() {
    //! 2-) Her bir render'da cagrilir
    console.log("rendered");
    return (
      <div className="container text-center">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
