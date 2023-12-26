import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const element = ()=>{
  return (
  <div>

    <h1>Hello guys! </h1>
    <p>Welcome to my youtube channel.</p>
    <p>Today is {new Date().toLocaleTimeString()}</p>
    
    <Child/> 
    {Child()}

  </div>) ; // ZORUNLU PARENT ELEMNTI
    
  }; 
  
const Child = () => <p>I am a 13 years old child. </p>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Element/>); //COMPONENT OLARAK CAGIRDIK
// root.render(element()); //FUNCTION OLARAK CAGIRDIK
root.render(<App />);


