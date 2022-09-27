const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const {getItems, createItem, getItem, updateItem, detleteItem} = require('../controllers/tracks');
const checkRol = require('../middleware/rol');

router.get("/", authMiddleware, getItems)

router.get("/:id", authMiddleware, checkRol(['admin']),validatorGetItem, getItem)

router.post("/", authMiddleware, validatorCreateItem, createItem)

router.put("/:id", authMiddleware, validatorCreateItem, validatorGetItem, updateItem)

router.delete("/:id", authMiddleware, validatorGetItem, detleteItem)
module.exports = router;