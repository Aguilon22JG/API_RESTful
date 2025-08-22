const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Proyecto = sequelize.define('Proyecto', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  fecha_inicio: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_fin: { type: DataTypes.DATEONLY },
  porcentaje_completado: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  tableName: 'proyectos',
  timestamps: false
});

module.exports = Proyecto;
