const express = require('express');
const router = express.Router();
const ItemController = require('./itemController');

// Gets a specific Item by id
router.get('/:id', ItemController.GetItem);

// Gets all the Items
router.get('', ItemController.GetItems);

module.exports = router;