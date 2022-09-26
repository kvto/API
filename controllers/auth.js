const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt");
const { encrypt } = require("../utils/handlePassword");

const registerCtrl = async (req, res) => {
    try{
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req, password}
    const dataUser = await usersModel.create(body)
    dataUser.set("password", undefined, {strict: false});

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }
    res.send({data})
    }catch(e){
    handleHttpError(res, "Error_register_user")
    }
    
}

const loginCtrl = async (req,res) =>{

}

module.exports = {loginCtrl, registerCtrl}