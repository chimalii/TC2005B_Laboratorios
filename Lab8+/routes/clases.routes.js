const express = require('express');
const router = express.Router();

const reseniasController = require('../controllers/resenias.controller');
const porVerController = require('../controllers/porVer.controller');

router.get('/crear', reseniasController.get_crear);
router.post('/crear', reseniasController.post_crear);
router.get('/', reseniasController.get_root);
router.get('/crear_porVer', porVerController.get_crear_porVer);
router.post('/crear_porVer', porVerController.post_porVer);
router.get('/porVer', porVerController.get_porVer);
router.get('/externos', (request, response) => {response.render('externos');});
router.get('/personal', (request, response) => {response.render('personal');});

module.exports = router;