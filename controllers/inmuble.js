const express = require("express");
const { inmubleModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");


/**
 * crea el items
 * const body = matchedData(req) trae solo los objetos 
 * declarados en el modelo
 * data: donde se almacena los valores por entrada
 * si hay un error returne  handleHttpError
 * @param {*} req 
 * @param {*} res 
 */
const createItems = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await inmubleModel.create(body)
    res.send({ data })
  } catch (error) {
    res.json({ error })
    handleHttpError(res, "ERROR_createItems");

  }
}
/**
 * Obtiene todos los valores almacenado en la BD,
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res = express.response) => {
  try {
    const user = req.user;
    const data = await inmubleModel.find({});
    res.send({ data, user });
  } catch (error) {
    handleHttpError(res, "ERROR_getItems");
  }
}
/**
 * Obtiene un valor por ID
 * si hay un error returne  handleHttpError
 * @param {*} req 
 * @param {*} res 
 */
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
/**
 * metodo de actualizar un valor por id
 * si hay un error returne  handleHttpError
 * @param {*} req 
 * @param {*} res 
 */
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
/**
 * metodo de eliminar un valor por id
 * si hay un error returne  handleHttpError
 * @param {*} req 
 * @param {*} res 
 */
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
