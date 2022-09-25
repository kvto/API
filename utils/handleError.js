const handleHttpError = (res, message = 'Algo sucedio', doce = 403 ) =>{
 res.status(code)
 res.status({error: message})
}

module.exports = {handleHttpError}