//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate(çok az değişiklikle veya hiç değişiklik olmadan birden çok yerde tekrarlanan) kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================

import  { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = { //BU YAPI BIR OBJE. O YUZDEN 'KEY:VALUE' SEKLINDE YAZIYORUZ.
        //COUNT STATE'INE BASLANGIC DEGERI ATADIK.
        count:props.count || 0,
      };
      this.increment=this.increment.bind(this);
      //ARROW FUNC. KULLANILMAZSA BINDING YAPILMASI GEREKIR. 'BIND' BIR JS METOTUDUR.

    //   this.decrement=this.decrement.bind(this);
    //   this.zero=this.zero.bind(this);

      //this.increment=func(){}
      //CONSTRUCTOR ICINDE YAZILSAYDI BU SEKILDE YAZILIRDI. AMA BU KULLANIM TAVSIYE EDILMEZ.
    }
    increment(){
        //JS'NIN CLASS YAPILARINDA FONK. TANIMLARKEN DIREK ISMIYLE TANIMLANIR.'CONST' VS. KULLANILMAZ. BU YAZILAN ALAN CONSTRUCTOR DISINDA OLDUGU ICIN (PROTOTYPE ALANI)! INTERVIEW'LARDA MUHAKKAK SORULUR!!!
        //BASLANGIC DEGERI DISINDA DOGRUDAN BIR STATE DEGISTIRILMEZ.
        //DEGER DEGİSTİRMEK ICIN SET.STATE METHOD'U KULLANILIR.
        this.setState({
            //STATE BIR OBJECT OLDUGU ICIN SUSLU PARANTZ, 'KEY:VALUE' SEKLINDE YAZILIR
            count: this.state.count+1
        }) 
    }

    decrement=()=>{
        this.setState({
            //STATE BIR OBJECT OLDUGU ICIN SUSLU PARANTZ, 'KEY:VALUE' SEKLINDE YAZILIR
            count: this.state.count-1
        }) 
    }

    zero=()=>{
        this.setState({
            //STATE BIR OBJECT OLDUGU ICIN SUSLU PARANTZ, 'KEY:VALUE' SEKLINDE YAZILIR
            count:this.props.count || 0
            //SIFIRLAMAK YERINE BASLANGIC DEGERINE DONDUR.
        }) 
    }

  render() {
    return (
       //SAYACTA SAYILAN DEGERLERIN SUREKLI EKRANA BASILMASI LAZIM
       <div className="container text-center mt-5 border border-5">
            <h2>CLASSFULL COMPONENT</h2>
            <h2 className ="display-2 text-danger">Count: {this.state.count} 
            <br/><span className='display-6'>  ({this.props.count || 0} ile başlayan sayaç)</span> </h2>
            <button   className="btn btn-success"
            onClick={this.increment}>increment</button> 

            <button className="btn btn-danger"
            onClick={this.decrement}>decrement</button>

            <button className="btn btn-warning"
            onClick={this.zero}> initialize</button>

        </div>
    )
  }
}

export default Counter;