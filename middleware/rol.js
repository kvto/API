const { handleHttpError } = require("../utils/handleError");

const checkRol = (roles) => (req, res, next) => {
    
    try{
    const {user} = req;
    const rolesByUser = user.roles;
    
    const checkValueRol = roles.some((rolsingle) => rolesByUser.includes(rolsingle))

    if(!checkValueRol){
        handleHttpError(res, "User_Not_Permissions", 403);
        return;
    }
    next()
    }catch(e){
        handleHttpError(res, "Error_Permissions", 403)
    }
    
    
}

module.exports= checkRol