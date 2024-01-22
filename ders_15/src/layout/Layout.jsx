import React from 'react';
import { Outlet } from 'react-router-dom';
import useLogged from '../config/LoggedHook';
import { Navigate } from 'react-router-dom';

const Layout = () => {
    //YENI SAYFAYA GECMEDEN AYNI SAYFA UZERINDE CHILD COMPONENT'I(VEYA ROUTE) DE RENDER ETMEK ICIN KULLANILIR
  const isLogged = useLogged();
  console.log(isLogged);
   
  
    return (
    <div>
        {!isLogged && ( <h1> Loading...</h1>)}
        {isLogged && ( <Navigate replace to="/"/> )}
        {/* REPLACE KOMUTU OLURSA, HISTORY'YE AKTARILMAZ */}
        <Outlet/>
    </div>
  )
}

export default  Layout 