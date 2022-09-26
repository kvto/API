const express = require('express');
const { matchedData } = require('express-validator');
const {tokenSign, verifyToken} = require('../utils/handleJwt')
const router = express.Router();
const {validatorRegister, validatorLogin} = require ("../validators/auth")
const {usersModel} = require('../models')
const {encrypt,compare} = require('../utils/handlePassword');
const { loginCtrl, registerCtrl } = require('../controllers/auth');

router.post("/register",validatorRegister, registerCtrl)

router.post("/login",validatorLogin, loginCtrl)

module.exports = router;