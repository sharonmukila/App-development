
import './App.css';
import { Dashboard } from './component/Dashboard';

import PrimarySearchAppBar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/signup';
import ContactUs from './component/Contactus';
import IncidentReporting from './component/IncidentReporting';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route path="/topbar" element={<PrimarySearchAppBar/>}/>  
        <Route path="/contact" element={<ContactUs/>}/>  
        <Route path="/reporting" element={<IncidentReporting/>}/>  
         
        <Route path="/" element={<Login/>}/>  
        <Route path="/signup" element={<Signup/>}/>  
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
