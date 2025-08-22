const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefono: { type: DataTypes.STRING },
  direccion: { type: DataTypes.STRING },
  puesto: { type: DataTypes.STRING },
  salario: { type: DataTypes.DECIMAL(10,2) },
  fecha_nacimiento: { type: DataTypes.DATEONLY },
  fecha_contratacion: { type: DataTypes.DATEONLY },
  estado: { type: DataTypes.TINYINT, defaultValue: 1 }
}, {
  tableName: 'empleados',
  timestamps: false
});

module.exports = Empleado;
