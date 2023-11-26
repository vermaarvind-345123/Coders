// import logo from './logo.svg';
import './App.css';
import  Login from './pages/Login'
import  Forgot from './pages/Forgot'
import  Dashboard from './pages/Dashboard'
import style from './Style.scss';
import Leave from './pages/Leave';
import Administration from './pages/Administration';
import Setting from './pages/Setting';
import Employee from './pages/Employee';
import Addition from './pages/Addition';
import Thankyou from './pages/Thankyou';
import Adduser from './pages/Adduser';
import User from './pages/User';
import Google from './pages/Google';
import Facebook from './pages/Facebook';

// import Leaveuser from './pages/Leaveuser';
 


// import { Router } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Routes>
      {/* <Route path ="/" element ={<Login/>}  ></Route>  */}
      <Route path ="/Login" element ={<Login/>}  ></Route> 
      <Route path ="/Forgot" element ={<Forgot/>}  ></Route> 
      <Route path ="/Dashboard" element ={<Dashboard/>}  ></Route> 
      <Route path ="/Leave" element ={<Leave/>}  ></Route> 
      <Route path ='/Administration' element={<Administration/>}></Route>
      <Route path ='/Setting' element={<Setting/>}></Route>
      <Route path='/Employee' element={<Employee/>}></Route>
      <Route path='/Addition' element={<Addition/>}></Route>
      <Route path='/Thankyou' element ={<Thankyou/>}></Route>
      <Route path='/Adduser' element ={<Adduser/>}></Route>
      <Route path='/User' element ={<User/>}></Route>
      <Route path='/Google' element ={<Google/>}></Route>
      <Route path='/Facebook' element ={<Facebook/>}></Route>

      {/* <Route path='/Leaveuser' element ={<Leaveuser/>}></Route> */}
      
    </Routes>
   </Router>
  );
}

export default App;
