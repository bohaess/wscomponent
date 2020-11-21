// import logo from './logo.svg';
import React from "react";
import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Address from './Component/Profile/Address';


function App() {
  return (
   <div className= "container">
     <div className= "FullName">
       <FullName/>

     </div>
     <div className= "Address">
       <Address/>

     </div>
     <div className= "ProfilPhoto">
       <ProfilPhoto/>

     </div>
    

     
     

   </div>
  );
}

export default App;
