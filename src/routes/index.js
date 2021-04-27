var express = require('express');
var router = express.Router();
const mainController = require ('../controllers/mainController');
/* GET users listing. */
router.get("/tasks", mainController.task)
router.post("/tasks", mainController.create)
router.delete("/tasks/:id", mainController.delete)
router.get("/tasks/:id", mainController.detail)
module.exports = router;