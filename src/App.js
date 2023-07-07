import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Components/User';
import Showuser from './Components/Showuser';
import UpdateUser from './Components/UpdateUser';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Header from './Components/Header';
import MyForm from './Components/Form';
import FormikApi from './Components/FormikApi';
import NormalValidation from './Components/NormalValidation';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/user' element={<User/>} ></Route>
      <Route path='/showUser' element={<Showuser/>}></Route>
      <Route path='/EditUser'element={<UpdateUser/>}></Route>
      <Route path='/form'element={<MyForm/>}></Route> 
      <Route path='/formikapi' element={<FormikApi/>}></Route> 
      <Route path='/normalvalidation' element={<NormalValidation/>}></Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
