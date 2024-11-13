import React ,{useEffect, useState,useContext} from "react";
import { Container } from "react-bootstrap";
import { Alert } from 'react-bootstrap';
import axios from "axios";
import { AuthContext } from "../context/authContext";
import './todayAttendance.css'
// import { Redirect } from "react-router-dom";

const TodayAttendance = () => {
  const [show,setshow] = useState(false);
  const Auth = useContext(AuthContext)

  // const Auth = useContext(AuthContext);
   
  
  const TodaysDate = new Date();
  const currentTime = TodaysDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  

  useEffect(() => {
    const currentTime = new Date();
   
    const eightHoursLater = new Date(currentTime.getTime() +  5000); // 8 hours in milliseconds

    const timer = setTimeout(() => {
      setshow(true);
    }, eightHoursLater.getTime() - currentTime.getTime());

    return () => clearTimeout(timer);
  }, []);

  const attendanceHandler = async () => {
    
    let response ;
    try{
      response = await axios.post("http://localhost:5000/api/user/intime",
      { intime:currentTime,
      date:currentTime,
      id:Auth.userId,
      token:Auth.token
      
    })
    console.log(response);
    }catch(err){
      console.log(err);
    }

  }

  useEffect(()=>{
    attendanceHandler();
  })

    return (
      <Container className="MainClss" fluid>
        <Container className="showData">
          <Alert className="alertSize" id="DateToday" variant="light">{ `Attendance of ${TodaysDate.getDate()}-${TodaysDate.toLocaleString('default', { month: 'long' })},${TodaysDate.getFullYear()} (${TodaysDate.toLocaleString('default', { weekday: 'long' })})`}</Alert>
            
            <Alert className="alertSize" id="colorBox" variant="primary">
              <ol>
                <li id="inTime">In Time</li>
                <p id="TxtTime">{currentTime}</p>
              </ol>
            </Alert>
            {show && <Alert className="alertSize" variant="success">
            <ol>
                <li>Out Time</li>
                <p>{TodaysDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
              </ol>
            </Alert>}
        </Container>
        </Container>
    );
}

export default TodayAttendance;