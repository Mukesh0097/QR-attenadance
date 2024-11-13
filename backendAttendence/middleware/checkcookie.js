const jwt = require('jsonwebtoken');

const checkCookie = (req,res,next)=>{
    const token = req.body.token;
    console.log(token)

    if(!token){
        res.status(404).json("invalid user");
        return;

    }
    try{
        const decoded = jwt.verify(token,"superSceret_don't share");
        req.user = decoded;
        next();
      } catch (er) {
        // console.log("err", er);
        //Incase of expired jwt or invalid token kill the token and clear the cookie
        res.clearCookie("token");
        return res.status(400).send(er.message);
      }

}

module.exports = checkCookie;