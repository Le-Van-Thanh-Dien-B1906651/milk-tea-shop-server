const express = require('express');
const router = express.Router();

const uploadImg = require('../configs/cloudinary.config');
const Drink = require('../controllers/Drink.controller');

router.get('/', Drink.findAll);
router.get('/search', Drink.search);
router.get('/:id', Drink.findById);
router.post('/', uploadImg.single('image'), Drink.create);
router.put('/:id', Drink.update);
router.delete('/:id', Drink.delete);

module.exports = router
