const express = require('express');
const { userLogin, userSignUp } = require('../controller/authController');

const router = express.Router();
//validation
const validator = require('express-joi-validation').createValidator({});
const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(5).max(25).required()
});

const registerSchema = joi.object({
  fullname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(5).max(25).required()
});


//==========================================

const notAllowed = (req, res) => res.status(405).json('method not allowed');



router.route('/api/userLogin').post(validator.body(loginSchema), userLogin).all(notAllowed);
router.route('/api/userSignUp').post(validator.body(registerSchema), userSignUp).all(notAllowed);



module.exports = router;