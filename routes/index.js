const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(titleController.homePage));

module.exports = router;
