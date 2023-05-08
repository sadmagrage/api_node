const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const comidaController = require('../controllers/comidaController');

router.use(bodyParser.json());

router.get('', comidaController.getAll);

router.get('/:comida_id', comidaController.getOne);

router.post('', comidaController.post);

router.put('/:comida_id', comidaController.put);

router.delete('/:comida_id', comidaController.del);

module.exports = {
    router
}