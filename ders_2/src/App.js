import logo from './logo.svg';
import './App.css';
import Header from './components/header'; //DEFAULT EXPORT PARANTEZ OLMADAN KELIME ILE CAGRILIR.
//import {Header} from './components/header'; //SADE EXPORT
import Footer from './components/footer';
import Content from './components/contents';


function App() {
  return( 
  <>
  <Header/>
  <Content/>
  <Footer/>
  </>);
}

export default App;
//
//COMPONENTLER HTML,CSS VE JS KODLARINDAN MEYDANA GELMIS KOD BLOGUDUR.
//COMPONENT'IN RETURN KISMI JSX'DIR (HTML+CSS+JS).
//JSX ICINDE BIRDEN FAZLA HTML ELEMENTI VARSA BUNLAR SARMAL(DIV, ARTICLE, HEADER, VB.) ICINE KONMALIDIR.