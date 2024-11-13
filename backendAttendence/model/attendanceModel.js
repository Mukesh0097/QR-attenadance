const mongoose = require("mongoose")
const user = require('./userDataModel')

const attendanceSchema =  new mongoose.Schema({
   time:String,
   Date:String,
   userID:{type:mongoose.Schema.Types.ObjectId,ref:user}
}
);

module.exports = mongoose.model('atttendancedata',attendanceSchema)