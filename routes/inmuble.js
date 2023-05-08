const express = require('express')
const { createItems, getItems, getItem, updateItem, deleteItem } = require('../controllers/inmuble')
const { validatorCreateItem, validatorGetItem } = require('../validators/inmuble')

const router = express.Router()


/**
 * http://localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * http://localhost:3001/api/inmuble:
 *      post:
 *          summary: "Register nuevo inmuble"
 *          description: "Esta ruta es para registrar un nuevo inmuble"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/inmueble"
 *          responses:
 *                  '201':
 *                      description: El inmuble se registra de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post("/", validatorCreateItem, createItems)

/**
 * http://localhost:3001/api
 * 
 * Route  obtener todo los items
 * @openapi
 * http://localhost:3001/api/inmuble:
 *      get:
 *          summary: "obtener todo los items de inmuble"
 *          description: " Esta ruta es para obtener todo los items registrados"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/inmueble"
 *          responses:
 *                  '201':
 *                      description: El inmuble se registra de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */

router.get("/", getItems)

/**
 * put inmuble
 * @openapi
 * /inmuble/{id}:
 *    get:
 *      summary: "Obtener detalle del inmuble"
 *      description: Obtener el detalle de una inmuble
 * 
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de inmuble a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la inmuble.
 *        '422':
 *          description: Error de validacion.
 */
router.get("/:id", validatorGetItem, getItem)

/**
 * put inmuble
 * @openapi
 * /inmuble/{id}:
 *    put:
 *      summary: "Actualizar inmuble"
 *      description: Actualizar el detalle de una inmuble
 * 
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de inmuble a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la inmuble.
 *        '422':
 *          description: Error de validacion.
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem)



/**
 * Delete inmuble
 * @openapi
 * /inmuble/{id}:
 *    delete:
 *      summary: "Eliminar inmuble"
 *      description: Elimiar el detalle de una inmuble
 * 
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de inmuble a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la inmuble.
 *        '422':
 *          description: Error de validacion.
 */
router.delete("/:id", validatorGetItem, deleteItem)










module.exports = router