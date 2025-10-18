const sequelize = require('../config/database');
const Usuario = require('./usuario.model');
const Proyecto = require('./proyecto.model');
const Asignacion = require('./asignacion.model');

Usuario.belongsToMany(Proyecto, { through: Asignacion, foreignKey: 'id_usuario' });
Proyecto.belongsToMany(Usuario, { through: Asignacion, foreignKey: 'id_proyecto' });

module.exports = { sequelize, Usuario, Proyecto, Asignacion };
