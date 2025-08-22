
/**
 * @swagger
 * tags:
 *   name: Empleados
 *   description: Gestión de empleados
 */
const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /api/empleados:
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: Empleado creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
*       400:
*         description: Error de validación
 */
router.post('/', require('../controllers/empleadosController').crearEmpleado);

/**
 * @swagger
 * /api/empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
*                 $ref: '#/components/schemas/Empleado'
 */
router.get('/', require('../controllers/empleadosController').obtenerEmpleados);

/**
 * @swagger
 * /api/empleados/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
*       404:
*         description: Empleado no encontrado
 */
router.get('/:id', require('../controllers/empleadosController').obtenerEmpleado);

/**
 * @swagger
 * /api/empleados/{id}:
 *   put:
 *     summary: Actualizar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
*       404:
*         description: Empleado no encontrado
 */
router.put('/:id', require('../controllers/empleadosController').actualizarEmpleado);


/**
 * @swagger
 * /api/empleados/{id}/baja:
 *   post:
 *     summary: Dar de baja (borrado lógico) un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del empleado
 *     responses:
 *       200:
 *         description: Empleado dado de baja
 *       404:
 *         description: Empleado no encontrado
 */
router.post('/:id/baja', require('../controllers/empleadosController').eliminarEmpleado);

/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental
 *         nombre:
 *           type: string
 *         apellido:
 *           type: string
 *         email:
 *           type: string
 *         telefono:
 *           type: string
 *         direccion:
 *           type: string
 *         puesto:
 *           type: string
 *         salario:
 *           type: number
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *         fecha_contratacion:
 *           type: string
 *           format: date
 *         estado:
 *           type: boolean
 *           default: true
 *       example:
 *         nombre: Juan
 *         apellido: Pérez
 *         email: juan.perez@empresa.com
 *         telefono: "5552347"
 *         direccion: Calle Falsa 123
 *         puesto: Desarrollador
 *         salario: 25000.50
 *         fecha_nacimiento: "1990-05-15"
 *         fecha_contratacion: "2023-01-01"
 *         estado: 1
 */
module.exports = router;
