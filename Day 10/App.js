
import Notification from './component/Notification';
import  RegistrationForm from './component/RegistrationForm';
import { Dashboard } from './component/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Login from "./component/Login";
import Terms from "./ComponentS/Terms";
import PrivacyPolicy from "./ComponentS/privacy";
import FaqSection from "./Faq";
import Home from '@mui/icons-material/Home';
import About from './ComponentS/About';
import IncidentReportingForm from './component/IncidentReporting';
import FileUploadForm from './component/FileUploads';
import LocationMap from './component/LoactionMap';
import IncidentList from './component/IncidentList';
import AdminLogin from './component/AdminLogin';





function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/faq" element={<FaqSection/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path='/registrationform' element={<RegistrationForm/>}/>
      <Route path="/notification" element={<Notification/>}/>   
      <Route path="/home"element={<Home/>}/>
      <Route path="about"element={<About/>}/>
      <Route path="/incidentreporting" element={<IncidentReportingForm/>}/>
      <Route path="/FileUploadForm" element={<FileUploadForm/>}/>
      <Route path="/LocationMap" element={<LocationMap/>}/>
      <Route path="IncidentList" element={<IncidentList/>}/>
      <Route path="AdminLogin" element={<AdminLogin/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;