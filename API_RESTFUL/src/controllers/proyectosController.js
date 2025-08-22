const { Proyecto } = require('../models');

exports.crearProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.create(req.body);
    res.status(201).json(proyecto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtenerProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(proyecto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (!proyecto) return res.status(404).json({ error: 'Proyecto no encontrado' });
    await proyecto.update(req.body);
    res.json(proyecto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
