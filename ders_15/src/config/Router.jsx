import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import AuthLayout from '../layout/AuthLayout';
import Layout from '../layout/Layout';

const RouterPages = () => {



  return (
    <BrowserRouter>
        <Routes>
            <Route element ={<Layout/>}>
                <Route path='/' element={<SignIn/>}/>
            </Route>
            {/* <Route element={<AuthLayout/>}> */}
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            {/* </Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPages;