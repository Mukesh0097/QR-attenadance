import React, {  useState } from 'react';
import Navigation from './RoutingElement/Navbar';
import Qrcode from './qrgenerate/Qr';


import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AuthLogin from './Authentication/login';
import SignIn from './Authentication/signIn';
import './app.css'
import TodayAttendence from './StudentData/TodaysAttendence';
import Attendance from './StudentData/AttendanceData';
import { AuthContext } from './context/authContext';
import checkCookie from '../../backendAttendence/middleware/checkcookie';


function App() {
  const [userId,setuserId] = useState(null);
  const [token,setToken] = useState(null);

  
  

  const login = (id,token)=>{
    // console.log(id);
    setuserId(id);
    setToken(token);
    // setlogged(true);
    
  }

  // console.log(token)

  // console.log(logged)

  let router 

  if(token){
    router = (
      <Routes>
      <Route exact path='/Todays-Attendance' element={<TodayAttendence/>}></Route>
      <Route exact path='/Attendance' element={<Attendance/>}></Route>
      </Routes>
    )}
    else{
      router = (
        <Routes>
        <Route exact path="/" element={<Qrcode value="http://localhost:3000/add-attends"/>} />
        <Route exact path="/login" element={<AuthLogin/>}/>
        <Route exact path="/signIn" element={<SignIn/>}/>
        
      </Routes>
      )
    }
  



  return (
    <AuthContext.Provider value={
      {
        login:login,
        isLoggedIn:!!token,
        token:token,
        userId:userId
        

      }
    }>
    
    <Router>
      
    <Navigation/>
    {router}
      
    </Router>


    </AuthContext.Provider>
  
  );
}

export default App;
