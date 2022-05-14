var express = require('express')
var router = express.Router();
const User =  require('../Schema/userSchema')

// Register SUer
router.post('/', async (req, res, next) => {
  const name = req.body.nameuser;
  const cnic = req.body.cnic;
  const mobile = req.body.mobile;
  const type = req.body.type;
  const email = req.body.email;
  const profile_pic = req.body.profile_pic;
  const password = req.body.password;


});

module.exports = router;
