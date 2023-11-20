const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

const progressController = require('../controllers/progressController');

router.use(bodyParser.json());

router.get('/', progressController.getAll);

router.get('/last', progressController.getLast);

router.get('/search', progressController.getOne);

router.post('/', progressController.post);

router.put('/', progressController.put);

router.delete('/:progressId', progressController.del);

module.exports = router;
    