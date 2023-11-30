const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

router.get('/', contactController.contactus);

module.exports = router;