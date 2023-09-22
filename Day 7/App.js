import './App.css';
import { Dashboard } from './component/Dashboard';

import PrimarySearchAppBar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/RegistrationForm';
import ContactUs from './component/Contactus';
import IncidentReporting from './component/IncidentReporting';
// import StatusPage from './component/status';
import Notification from './component/Notification';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard/>}> </Route>
        <Route path="/topbar" element={<PrimarySearchAppBar/>}/>  
        <Route path="/contact" element={<ContactUs/>}/>  
        <Route path="/reporting" element={<IncidentReporting/>}/>  
        {/* <Route path="/status" element={<StatusPage/>}/>   */}
        <Route path="/notification" element={<Notification/>}/>  
   
         
        <Route path="/" element={<Login/>}/>  
        <Route path="/signup" element={<Signup/>}/>  
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;