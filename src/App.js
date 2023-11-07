
import { Routes, Route } from 'react-router';
import './App.css';
import CompanyForm from './Components/CompanyForm';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/company-form" element={<CompanyForm/>}/>

   </Routes>

   </>
  );
}

export default App;
