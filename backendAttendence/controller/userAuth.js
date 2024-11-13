 const NewUser = require("../model/userDataModel");
 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken')


const login = async (req,res) => {
    const {email,Password} = req.body
    
    let loggedUser
    try{
        loggedUser = await NewUser.findOne({email})
    }catch(err){
        res.status(500).json({err:"internal server problem"})
    }
    
    let checkPassword ;

    try{
        checkPassword = await bcrypt.compare(Password,loggedUser.password);
    }catch(err){
        res.status(500).json("internal server problem");
        return;
    }

    if(!checkPassword && loggedUser.length === 0){
        res.status(400).json("invalid credential");
        return

    }

    const token = jwt.sign(
        {
        userID:loggedUser._id,
        
        }
        ,"superSceret_don't share",
        {
        expiresIn:'2h'
        }
    )


    // res.json({userID:loggedUser._id.toString(),email:loggedUser.email,token:token});

    // res
    // .cookie("token", token, { httpOnly: true })
    // .send(_.pick(user, ["_id", "name", "role"]));

    res
    .cookie("token",token,{httpOnly:true})
    .send({userID:loggedUser._id.toString(),email:loggedUser.email,token:token})



    

    // if(loggedUser.length === 0 ){
    //     res.status(404).json({err:"user is not exist"});
    //     return;
    // }

    // res.json(loggedUser)
    
}

const signUp = async (req,res)=>{
    const {name ,email,Password} = req.body;
    let alreadyExistUser
    try{
        alreadyExistUser = await NewUser.findOne({email:email})
    }catch(err){
       res.status(500).json("internal server problem ")
       return;
    }

    if(alreadyExistUser){
        res.status(409).json({err:"useralready exist please login"})
        return;
    }

    let encryptedPassword ;

    try{
        encryptedPassword = await bcrypt.hash(Password,10);
    }catch(err){
        res.status(500).json("internal server problem");
        return;
    }

    const user = new NewUser({
        name:name,
        email:email,
        password:encryptedPassword
    })
    
    try{
        await user.save();
    }catch(err){
        res.status(500).json("internal server problem ");
        return;
    }

    const token = jwt.sign(
        {
        userID:user._id,
        email
    },"superSceret_don't share")
    // res.status(201).json({userID:user._id.toString(),email:user.email,token:token});
    res
    .cookie("token",token,{httpOnly:true})
    .send({userID:user._id.toString(),email:user.email,token:token})
}

exports.login = login;
exports.signUp = signUp;