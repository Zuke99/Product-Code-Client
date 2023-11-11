
import { Routes, Route } from 'react-router';
import './App.css';
import CompanyForm from './Components/CompanyForm';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PharmacyForm from './Components/PharmacyForm';
import Login from './Components/Login';
import DoctorEntry from './Components/DoctorEntry';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/company-form" element={<CompanyForm/>}/>
    <Route path="/pharmacy-form" element={<PharmacyForm/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/add-doctor' element={<DoctorEntry/>}/>

   </Routes>

   </>
  );
}

export default App;
