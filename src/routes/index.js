var express = require('express');
var router = express.Router();
const mainController = require ('../controllers/mainController');
/* GET users listing. */
router.get("/", mainController.index)
router.post("/tasks", mainController.task)
router.get("/tasks", mainController.create)
router.post("/tasks/:id", mainController.delete)
router.get("/", mainController.read)
router.get("/:id", mainController.detail)
module.exports = router;