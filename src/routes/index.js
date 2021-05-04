var express = require('express');
var router = express.Router();
const mainController = require ('../controllers/mainController');
const { check, validationResult, body } = require('express-validator');
/* GET users listing. */
router.get("/tasks", mainController.task)
router.post("/tasks", [check('title').isLength({min: 3})], mainController.create)
router.delete("/tasks/:id", mainController.delete)
router.get("/tasks/:id", mainController.detail)
module.exports = router;