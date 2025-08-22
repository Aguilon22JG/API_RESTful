const sequelize = require('../config/database');
const Empleado = require('./Empleado');
const Proyecto = require('./Proyecto');
const Asignacion = require('./Asignacion');

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar:', error);
  }
};

module.exports = { Empleado, Proyecto, Asignacion, syncModels };
