const express = require("express");
const { inmubleModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");

const createItems = async (req, res = express.response) => {
  try {
    const body = matchedData(req)
    const data = await inmubleModel.create(body)
    res.send({ data })
  } catch (error) {
    res.json({ error })
    handleHttpError(res, "ERROR_createItems");

  }
}
const getItems = async (req, res = express.response) => {
  try {
    const user = req.user;
    const data = await inmubleModel.find({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, "ERROR_getItems");
  }
}

const getItem = async (req, res = express.response) => {
  try {
    // metodo para tomar solo el id
    req = matchedData(req)
    const { id } = req
    const data = await inmubleModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "ERROR_getItem");
  }
}

const updateItem = async (req, res = express.response) => {
  try {
    // metodo de abtraccion del id y el body con operador Spread
    const { id, ...body } = matchedData(req)
    const data = await inmubleModel.findOneAndUpdate(id, body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "ERROR_updateItem");
  }
}
const deleteItem = async (req, res = express.response) => {
  try {
    // metodo para tomar solo el id
    req = matchedData(req)
    const { id } = req
    const data = await inmubleModel.deleteOne({ _id: id })
    res.send({ data })

  } catch (error) {
    handleHttpError(res, "ERROR_deleteItem");
  }
}


module.exports = {
  createItems, getItems, getItem, updateItem, deleteItem
}
