const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const progressController = require('../controllers/progressController');

router.use(bodyParser.json());

router.get('', progressController.getAll);

router.get('/:progress_id', progressController.getOne);

router.post('', progressController.post);

router.put('/:progress_id', progressController.put);

router.delete('/:progress_id', progressController.del);

module.exports = {
    router
}