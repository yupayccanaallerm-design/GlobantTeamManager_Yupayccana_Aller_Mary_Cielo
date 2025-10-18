const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const controller = require('../controllers/projects.controller');

router.get('/projects', auth, controller.list);
router.post('/projects', auth, controller.create);
router.put('/projects/:id', auth, controller.update);
router.delete('/projects/:id', auth, controller.remove);

module.exports = router;
