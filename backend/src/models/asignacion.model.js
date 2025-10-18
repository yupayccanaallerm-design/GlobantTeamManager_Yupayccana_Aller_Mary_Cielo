const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asignacion = sequelize.define('Asignacion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rol: { type: DataTypes.STRING },
  horas_semana: { type: DataTypes.INTEGER, defaultValue: 40 }
}, { tableName: 'asignaciones' });

module.exports = Asignacion;
