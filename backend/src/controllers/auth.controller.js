const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
  try {
    const { correo, password } = req.body;
    const user = await Usuario.findOne({ where: { correo }});
    if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Credenciales inválidas' });
    const token = jwt.sign({ id: user.id, correo: user.correo, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '8h' });
    res.json({ token, user: { id: user.id, nombre: user.nombre, correo: user.correo, rol: user.rol }});
  } catch (err) { next(err); }
};
