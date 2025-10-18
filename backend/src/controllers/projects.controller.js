const { Proyecto } = require('../models');

exports.list = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const proyecto = await Proyecto.create(req.body);
    res.status(201).json(proyecto);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const [updated] = await Proyecto.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ message: 'Proyecto no encontrado' });
    const proyecto = await Proyecto.findByPk(id);
    res.json(proyecto);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const deleted = await Proyecto.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Proyecto no encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
