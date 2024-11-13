import React ,{useState,useContext} from 'react';

import { Container} from 'react-bootstrap';
import { Navbar, Nav,Modal,Button,Form } from 'react-bootstrap';
import { Link , useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import mypic from '../image/myPic.jpeg'
import './Nav.css'




const Navigation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Auth = useContext(AuthContext)
  

  const location = useLocation();

  // console.log(Auth.isLoggedIn);

     if(location.pathname === '/login' || location.pathname === '/signIn'){
        return <>
        <Navbar expand="lg" variant="light" bg="dark">
        <Container>
        <Navbar.Brand href="#" className='brandText'><span text="yellow">Attendence</span>System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{  color: 'rgb(255, 255, 0)' }}/>
          <Navbar.Collapse id="basic-navbar-nav " style={{  color: 'rgb(255, 255, 0)' }}>
            <Nav className="mr-auto ">
              <Nav.Link as={Link} to="/login" className='NavText'>Login</Nav.Link> 
              <Nav.Link as={Link} to="/signIn" className='NavText'>SignIn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          </>
      }else if( ( location.pathname === '/studentData' || location.pathname === '/Todays-Attendance'||location.pathname === '/Attendance'))
      {
        return <>
      <Navbar expand="lg" variant="light" bg="dark">
      <Container>
      <Navbar.Brand href="#" className='brandText'><span text="yellow">Attendence</span>System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{  color: 'rgb(255, 255, 0)' }}/>
        {Auth.isLoggedIn && <Navbar.Collapse id="basic-navbar-nav " style={{  color: 'rgb(255, 255, 0)' }}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Todays-Attendance" className='NavText'>Todays-Attendence </Nav.Link> 
           <Nav.Link as={Link} to="/Attendance" className='NavText'>Attendence</Nav.Link>
           
        </Nav> 
        <Nav className="ms-auto">
        <img src={mypic} alt="userPic" style={{height:"50px",width:"50px",borderRadius:"50%"}} onClick={handleShow}/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
          <Container >
          <img src={mypic} alt="userPic" style={{height:"100px",width:"100px",borderRadius:"50%"}} />
          <h3>Mukesh</h3>
          <Button variant="secondary" onClick={handleClose}>
            select Photo
          </Button>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      

        </Nav>
      </Navbar.Collapse>}
      </Container>
      </Navbar>
      
      </>
      }else if(location.pathname === '/'){
        return (
        <Navbar expand="lg" variant="light" bg="dark">
        <Container>
        <Navbar.Brand href="#" className='brandText'>
        <span text="yellow">Attendence</span>System</Navbar.Brand>
        </Container>
        </Navbar>
        )
      }
    
 
      
      
  


}

export default Navigation;