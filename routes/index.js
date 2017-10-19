const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');

router.get('/', titleController.homePage);

module.exports = router;
