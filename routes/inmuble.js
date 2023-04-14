const express = require('express')
const { createItems, getItems, getItem, updateItem, deleteItem } = require('../controllers/inmuble')
const { validatorCreateItem, validatorGetItem, validatorUpdateItem } = require('../validators/inmuble')

const router = express.Router()

router.post("/", validatorCreateItem, createItems)

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)


router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)

router.delete("/:id",validatorGetItem, deleteItem)










module.exports = router