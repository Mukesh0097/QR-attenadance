const express = require("express");
const {login,signUp} = require('../controller/userAuth')

const router = express.Router();

router.post("/login",login);

router.post("/signUp",signUp);

module.exports = router;



