const express = require('express');
const router = express.Router();

const Category = require('../controllers/Category.controller');

router.post('/', Category.create);

module.exports = router
