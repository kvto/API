const { matchedData } = require('express-validator');
const {tracksModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');


const getItems = async (req,res) =>{ 

    try {
    const data = await tracksModel.find({});
    res.send({data})
    }catch(e){
        handleHttpError(res, "Error_Get_Items")
    }
    
}

const getItem = async (req,res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data})
    } catch(e){
        handleHttpError(res, "Error_Get_Itemm")
    }
}

const createItem = async (req,res) =>{

    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})
        }catch(e){
            handleHttpError(res, "Error_Create_Items")
        }
        
    

}

const updateItem = async (req,res) =>{
    try {
        const {id, ...body} = matchedData(req) //extrae el id y lo que reste en una constante body
        const data = await tracksModel.findOneAndUpdate(id, body)
        res.send({data})
        }catch(e){
            handleHttpError(res, "Error_Update_Items")
        }
}

const detleteItem = async (req,res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id});
        res.send({data})
    } catch(e){
        handleHttpError(res, "Error_Delete_Itemm")
    }
}

module.exports = {getItems,createItem,updateItem,getItem,detleteItem}