
/**
 * @swagger
 * tags:
 *   name: Proyectos
 *   description: Gestión de proyectos
 */
const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');

/**
 * @swagger
 * /api/proyectos:
 *   post:
 *     summary: Crear un nuevo proyecto
 *     tags: [Proyectos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proyecto'
 *     responses:
 *       201:
 *         description: Proyecto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
 *       400:
 *         description: Error de validación
 */
// Crear proyecto
router.post('/', proyectosController.crearProyecto);

/**
 * @swagger
 * /api/proyectos:
 *   get:
 *     summary: Obtener todos los proyectos
 *     tags: [Proyectos]
 *     responses:
 *       200:
 *         description: Lista de proyectos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proyecto'
 */
// Leer todos los proyectos
router.get('/', proyectosController.obtenerProyectos);

/**
 * @swagger
 * /api/proyectos/{id}:
 *   get:
 *     summary: Obtener un proyecto por ID
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proyecto
 *     responses:
 *       200:
 *         description: Proyecto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
 *       404:
 *         description: Proyecto no encontrado
 */
// Leer un proyecto
router.get('/:id', proyectosController.obtenerProyecto);

/**
 * @swagger
 * /api/proyectos/{id}:
 *   put:
 *     summary: Actualizar un proyecto
 *     tags: [Proyectos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proyecto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proyecto'
 *     responses:
 *       200:
 *         description: Proyecto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proyecto'
 *       404:
 *         description: Proyecto no encontrado
 */
// Actualizar proyecto
router.put('/:id', proyectosController.actualizarProyecto);

/**
 * @swagger
 * components:
 *   schemas:
 *     Proyecto:
 *       type: object
 *       required:
 *         - nombre
 *         - fecha_inicio
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autoincremental
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         fecha_inicio:
 *           type: string
 *           format: date
 *         fecha_fin:
 *           type: string
 *           format: date
 *         porcentaje_completado:
 *           type: integer
 *           default: 0
 *       example:
 *         nombre: Sistema de Inventario
 *         descripcion: Desarrollo de un sistema para gestionar inventarios de la empresa
 *         fecha_inicio: "2025-08-01"
 *         fecha_fin: "2025-12-31"
 *         porcentaje_completado: 25
 */
module.exports = router;
