
/**
 * @swagger
 * tags:
 *   name: Asignaciones
 *   description: Asignación de empleados a proyectos
 */
const express = require('express');
const router = express.Router();
const asignacionesController = require('../controllers/asignacionesController');

/**
 * @swagger
 * /api/asignaciones:
 *   post:
 *     summary: Asignar un empleado a un proyecto
 *     tags: [Asignaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - empleadoId
 *               - proyectoId
 *             properties:
 *               empleadoId:
 *                 type: integer
 *               proyectoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Asignación creada
 *       400:
 *         description: Error de validación
 */
// Asignar empleado a proyecto
router.post('/', asignacionesController.asignarEmpleado);

/**
 * @swagger
 * /api/asignaciones:
 *   get:
 *     summary: Listar todas las asignaciones
 *     tags: [Asignaciones]
 *     responses:
 *       200:
 *         description: Lista de asignaciones
 */
// Listar asignaciones
router.get('/', asignacionesController.listarAsignaciones);

/**
 * @swagger
 * /api/asignaciones/{id}:
 *   put:
 *     summary: Cambiar el proyecto de una asignación
 *     tags: [Asignaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la asignación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               proyectoId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Asignación actualizada
 *       404:
 *         description: Asignación no encontrada
 */
// Actualizar asignación (cambiar de proyecto)
router.put('/:id', asignacionesController.actualizarAsignacion);

/**
 * @swagger
 * components:
 *   schemas:
 *     Asignacion:
 *       type: object
 *       required:
 *         - empleadoId
 *         - proyectoId
 *       properties:
 *         empleadoId:
 *           type: integer
 *         proyectoId:
 *           type: integer
 *         fecha_asignacion:
 *           type: string
 *           format: date
 *       example:
 *         empleadoId: 1
 *         proyectoId: 2
*         fecha_asignacion: "2025-08-22"
 */
module.exports = router;
