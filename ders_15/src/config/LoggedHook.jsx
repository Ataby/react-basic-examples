import React, { useState } from 'react'
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const useLogged = () => {
    //CUSTOM HOOK TANIMLARKEN MUTLAKA 'USE' KULLANILMASI GEREKIYOR

    const [logged,setlogged]=useState(false);
    //KULLANICI GIRIS YAPMISSA TRUE, DEGILSE FALSE

    // GIRIS YAPMA
    // useEffect(() => {
    //   setTimeout(()=>{
    //      setlogged(true);
    //    },1000)    
    // }, [ ])

    //CIKIS YAPMA
    // useEffect(() => {
    //   signOut(auth);
    // onAuthStateChanged((auth),(user)=>{
    //   console.log(user);
    //   setlogged(!!user)})
  
    // }, [ ])
    
  return (logged);
}

export default useLogged;