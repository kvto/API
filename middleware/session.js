const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const {usersModel} = require('../models') 

const authMiddleware = async (req,res,next) =>{
try{
    if(!req.headers.authorization){
        handleHttpError(res, "Not_Token", 401);
        return
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataToken = await verifyToken();

    if(!dataToken.id){
        handleHttpError(res, "Error_Id_Token", 401);
        return
    }
     
    const user = await usersModel.findById(dataToken._id)
    req.user= user
    next();

}catch(e){
    handleHttpError(req, "Not_Session", 401)
}
}

module.exports = authMiddleware