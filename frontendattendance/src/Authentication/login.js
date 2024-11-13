import React, { useState,useContext} from "react";
import axios from 'axios';
// import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import { AuthContext } from "../context/authContext";
import './login.css'



const AuthLogin = () =>{
  const [password,setPassword] = useState();
  const [email,setEmail] = useState();
  const Auth = useContext(AuthContext)
  const Navigation = useNavigate();


    const loginHandler =  async (event)=>{
      event.preventDefault();
      // console.log(email+" "+password);

      try{
        const response = await axios.post('http://localhost:5000/api/auth/login',{
        email:email,
        Password:password,
        
      })
      
    
      const {userID,token} = response.data;
      Auth.login(userID,token)
      
      
      
      }catch(err){
        console.log(err);
      }
      
        Navigation('/Todays-Attendance')
      
      

    }

    const passwordHandler = (event) => {
      setPassword(event.target.value);
      

    }

    const emailHandler = (event) =>{
      setEmail(event.target.value);
     
    }

    return <Container className="d-flex justify-content-center align-items-center flex-column g-2"  style={{height:"100vh"}} >
    
    <Form className="formDeco" onSubmit={loginHandler}>
    <h1>Login</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="labelSty">Email address</Form.Label>
      <Form.Control type="email"  className="labelBdr"  placeholder="Enter email" onChange={emailHandler}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="labelSty">Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={passwordHandler}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
 

    
    
}

export default AuthLogin;