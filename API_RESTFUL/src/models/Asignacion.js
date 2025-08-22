const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Empleado = require('./Empleado');
const Proyecto = require('./Proyecto');

const Asignacion = sequelize.define('Asignacion', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  empleadoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Empleado, key: 'id' },
    unique: true // Un empleado solo puede estar en un proyecto a la vez
  },
  proyectoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Proyecto, key: 'id' }
  },
  fecha_asignacion: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
}, {
  tableName: 'asignaciones',
  timestamps: false
});

Empleado.hasOne(Asignacion, { foreignKey: 'empleadoId' });
Proyecto.hasMany(Asignacion, { foreignKey: 'proyectoId' });
Asignacion.belongsTo(Empleado, { foreignKey: 'empleadoId' });
Asignacion.belongsTo(Proyecto, { foreignKey: 'proyectoId' });

module.exports = Asignacion;
