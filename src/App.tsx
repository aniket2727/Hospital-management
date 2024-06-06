// this code is written in typescript and the react  by aniket kadam

import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'



import NavbarComponets from './Header/Navbar/Navbarcompontes'
import LoginComponets from './Login/LoginComponets';
import RegisterComponets from './Register/RegsiterComponets';
import PatientRegister from './Patient/PatientRegister';


const Pagenotfound=()=>{
  return(
    <div>
      <p>page not found</p>
    </div>
  )
}


function App() {
  return (
    <div>
         <NavbarComponets/>
         <BrowserRouter>
           <Routes>
            <Route path='/login' element={<LoginComponets/>}/>
            <Route path='/register' element={<RegisterComponets/>}/>
            <Route path='/patient/register' element={<PatientRegister/>}/>
            <Route path='*'  element={<Pagenotfound/>}/>
           </Routes>
         </BrowserRouter>
       
      
     
    </div>
  );
}

export default App;
