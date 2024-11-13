const express = require('express');
const mongoose = require('mongoose');
const Attendanceroutes = require('./Routes/attendanceRoute')
const authRoutes = require('./Routes/authuser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const checkCookie = require("./middleware/checkcookie")
const app = express();



app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });


 
app.use('/api/auth',authRoutes);
app.use(cookieParser());
app.use(cors());
app.use(checkCookie);


app.use('/api/user',Attendanceroutes);

mongoose.connect(`mongodb+srv://mukesh:tz31OfO5muewZ125@cluster0.4bl0su2.mongodb.net/Attendance?retryWrites=true&w=majority`,{useNewUrlParser: true,
useUnifiedTopology: true,autoIndex: false}).then(console.log("connect"))

app.listen(5000);
