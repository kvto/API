const express = require('express');
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const {getItems, createItem, getItem, updateItem, deleteItem} = require('../controllers/tracks');

router.get("/",getItems)

router.get("/:id", validatorGetItem, getItem)

router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorCreateItem, validatorGetItem, updateItem)

router.delete("/:id", validatorGetItem, deleteItem)
module.exports = router;