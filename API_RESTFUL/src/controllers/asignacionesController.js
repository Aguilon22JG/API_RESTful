const { Asignacion, Empleado, Proyecto } = require('../models');

exports.asignarEmpleado = async (req, res) => {
  try {
    const { empleadoId, proyectoId } = req.body;
    const existe = await Asignacion.findOne({ where: { empleadoId } });
    if (existe) return res.status(400).json({ error: 'El empleado ya está asignado a un proyecto.' });
    const empleado = await Empleado.findByPk(empleadoId);
    const proyecto = await Proyecto.findByPk(proyectoId);
    if (!empleado || !proyecto) return res.status(404).json({ error: 'Empleado o proyecto no encontrado.' });
    const asignacion = await Asignacion.create({ empleadoId, proyectoId });
    res.status(201).json(asignacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarAsignaciones = async (req, res) => {
  try {
    const asignaciones = await Asignacion.findAll({ include: [Empleado, Proyecto] });
    res.json(asignaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarAsignacion = async (req, res) => {
  try {
    const asignacion = await Asignacion.findByPk(req.params.id);
    if (!asignacion) return res.status(404).json({ error: 'Asignación no encontrada' });
    if (req.body.proyectoId) {
      asignacion.proyectoId = req.body.proyectoId;
      await asignacion.save();
    }
    res.json(asignacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
