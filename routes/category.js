const express = require('express');
const controller = require('../controllers/category');
const router = express.Router();

route.get('/category', controller.category);

module.exports = router;