const { matchedData } = require('express-validator');
const fs = require('fs')
const {storageModel} = require('../models');
const { handleHttpError } = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`


const getItems = async (req,res) =>{ 
    try{
    const data = await storageModel.find({});
    res.send({data})    
    } catch(e){
        handleHttpError(res, "Error_Get_Items")
    }
    
}

const getItem = async (req,res) =>{
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id);
        res.send({data})    
        } catch(e){
            handleHttpError(res, "Error_Detail_Item")
        }
}

const createItem = async (req,res) =>{
    try{
    const {body, file} = req
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({data})    
    } catch(e){
        handleHttpError(res, "Error_Create_item")
    }
    

}


const detleteItem = async (req,res) =>{
    try{
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id);
        await storageModel.delete({_id:id})
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`
        // fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted:1
        }
        res.send({data})    
        } catch(e){
            handleHttpError(res, "Error_Detail_Item")
        }
}


module.exports = {getItems,createItem,getItem,detleteItem}