const express = require("express");
const Attendance = require('../controller/userAttendance')
const router = express.Router();

router.get('/:id/data',Attendance.attendanceData);
router.post('/intime',Attendance.getinTime);
// router.post('/outtime',Attendance.getOutTime);

module.exports = router;

// router.get('/user:id/data',attendanceData);

// router.post('/intime',getinTime);

// router.post('/outtime',getOutTime);

