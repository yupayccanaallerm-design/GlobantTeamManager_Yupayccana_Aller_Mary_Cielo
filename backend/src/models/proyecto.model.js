const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Proyecto = sequelize.define('Proyecto', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  estado: { type: DataTypes.ENUM('planning','active','completed','on_hold'), defaultValue: 'planning' },
  fecha_inicio: { type: DataTypes.DATEONLY },
  fecha_fin: { type: DataTypes.DATEONLY }
}, { tableName: 'proyectos' });

module.exports = Proyecto;
