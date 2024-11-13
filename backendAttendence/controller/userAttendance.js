const attendancedata = require('../model/attendanceModel')

const getinTime =async (req,res) => {
    const {intime,id,date} = req.body
    console.log("hello");
    const inTimeForAttendance = new attendancedata({
    time: intime,
    Date:date,
    userID:id
    })

    try{
        await inTimeForAttendance.save();
    }catch(err){
        console.log(err);
    }

    res.json(inTimeForAttendance);

}

// const getOutTime = async (req,res) => {
//     const {outtime,id} = req.body
//     const t1 = outtime.split('T')
//     const t2 = t1[1].split('.')
//     const actualTime = t2[0];
//     console.log(id)
//     let Time;
//      try{
//         Time = await attendancedata.findByIdAndUpdate(id,{outtime:actualTime},{new:true})
//         console.log(Time);
//      }catch(err){
//         console.log(err)
//      }
//    res.send(Time)
// }

const attendanceData = async(req,res) => {
    // const splitedIntime = arry[0].split(":");
    // const splitedOuttime = arry[1].split(":");
    // const totaltime = parseFloat((splitedOuttime[0] + (splitedOuttime[1]/60)))-parseFloat((splitedIntime[0]+(splitedIntime[1]/60)));
    // const data = {
    //     inTime:arry[0],
    //     outtime:arry[1],
    //     totalHours:totaltime

    // }

    // res.json(data);

    let data ;
    try{
        data = await attendancedata.find({});
        console.log(data)
    }catch(err){
        console.log(err);
    }

    res.send(data);
}


exports.getinTime = getinTime;
// exports.getOutTime = getOutTime;
exports.attendanceData = attendanceData;