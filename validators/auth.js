const { check } = require("express-validator");
const validateResults = require("../utils/handleValidators");

const validatorRegister=[
        check("name").exists().notEmpty().isLength({min:3, max:99}),
        check("age").exists().notEmpty().isNumeric({min:17, max:30}),
        check("password").exists().notEmpty().isLength({min:3, max:8}),
        check("email").exists().notEmpty().isEmail(),
    
        (req, res, next) => {
            return validateResults(req,res,next)
        }
];

const validatorLogin=[
    check("password").exists().notEmpty().isLength({min:3, max:8}),
    check("email").exists().notEmpty().isEmail(),

    (req, res, next) => {
        return validateResults(req,res,next)
    }
];
module.exports = { validatorLogin, validatorRegister };