import React, { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import MonthSelector from "./monthSelector";
import './attendance.css'


const Attendance = () =>{
   
    const [month,setmonth] = useState(0);

    const handleMonth = (event) =>{
        setmonth(event.target.value)
    }
 
    return(
        <div className="attendanceCls">
            <Container><h3 className="text-center txtFormat">Your Attendance</h3></Container>
            <Container className="selectMonth flex " fluid ="sm">
            <Row className="justify-content-center flex-nowrap">
                <Col lg={4}> 
                <span>Your </span>
                <MonthSelector selectedMonth = {month}  onMonthChange={handleMonth}  />
                <span > Attendance</span>
                </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Attendance;