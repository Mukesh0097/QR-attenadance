import React, { useState,useContext } from "react"
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import './login.css'

const SignIn= () =>{
  const [formData,setformData] = useState({
    name:"",
    email:"",
    Password:"",
    enrollment:""
  })

  const Auth = useContext(AuthContext);

  const Navigation = useNavigate();

  const inputChangeHandler = (event) => {
    const {name,value} = event.target;
    setformData({...formData,[name]:value});
    

  }
//   <Form.Group className="mb-3" controlId="formBasicPassword">
//   <Form.Label className="labelSty">Password</Form.Label>
//   <Form.Control type="password"  placeholder="Password" />
// </Form.Group>
  

  const submitHandler = async (event)=>{
    event.preventDefault();
    console.log(formData)
    try{
      const resposnse = await axios.post('http://localhost:5000/api/auth/signUp',formData);
      const {userID,token} = resposnse.data
      Auth.login(userID,token);
       
    }catch(err){
      console.log("this is err",err);
    }
    
      Navigation('/Todays-Attendance');
    
    
  }

    return (
    <Container className="d-flex justify-content-center align-items-center flex-column g-2"  style={{height:"120vh"}} >
    <Form className="formDeco" onSubmit={submitHandler}>
    <h1>signIn</h1>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label className="labelSty">Name</Form.Label>
      <Form.Control type="text" name="name" className="labelBdr"  placeholder="Enter your Name" onChange={inputChangeHandler}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEnrollment">
      <Form.Label className="labelSty">Enrollment No.</Form.Label>
      <Form.Control type="number" name="enrollment"  className="labelBdr"  placeholder="Enter Enrollment No" onChange={inputChangeHandler} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label className="labelSty">Email address</Form.Label>
      <Form.Control type="email" name="email" className="labelBdr"  placeholder="Enter email" onChange={inputChangeHandler} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="labelSty">Password</Form.Label>
      <Form.Control type="password" name="Password" placeholder="Confirm-Password" onChange={inputChangeHandler} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>)
}

export default SignIn;