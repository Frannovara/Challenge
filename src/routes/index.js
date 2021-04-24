var express = require('express');
var router = express.Router();
const mainController = require ('../controllers/mainController');
/* GET users listing. */
router.get('/', function(req, res, next){
  res.render('index.ejs')
})

router.post("/tasks/:id", mainController.delete)

module.exports = router;