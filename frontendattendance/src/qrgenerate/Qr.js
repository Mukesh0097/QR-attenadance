import React from "react";
import QRCode from "react-qr-code";
import Quate from '../randomQuat/quate'
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import './Qr.css'




const Qrcode = (props) =>{
    const TodaysDate = new Date();
    return (
        <Container className="d-flex justify-content-center align-items-center flex-column utility" style={{height:"100vh"}}>
        <div className="formargin">
        <h4>{ `Attendance of ${TodaysDate.getDate()}-${TodaysDate.toLocaleString('default', { month: 'long' })},${TodaysDate.getFullYear()} (${TodaysDate.toLocaleString('default', { weekday: 'long' })})`}</h4>
        <Row >
        <Quate/>
        </Row>
        <Row>
        <QRCode
        size={256}
        value={props.value}/>
        </Row>
        </div>
        </Container>
       
    
       
       
    )
}

export default Qrcode;