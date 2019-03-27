const express = require('express');
const viewsController = require('../controllers/index');
const apiController = require('../controllers/api');

const router = express.Router();

router.get('/', viewsController.getIndex);
router.get('/api/whoami', apiController.getMyData);

module.exports = router;