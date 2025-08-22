const { Empleado } = require('../models');

exports.crearEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll({ where: { estado: 1 } });
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtenerEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findOne({ where: { id: req.params.id, estado: 1 } });
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findOne({ where: { id: req.params.id, estado: 1 } });
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    await empleado.update(req.body);
    res.json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findOne({ where: { id: req.params.id, estado: 1 } });
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    await empleado.update({ estado: 0 });
    res.json({ mensaje: 'Empleado dado de baja (borrado lógico)' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
