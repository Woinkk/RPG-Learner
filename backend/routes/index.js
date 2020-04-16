var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login',(req, res, next) => {
  if (req.session.connected) {
    res.sendStatus('401');
    return;
  }
  // fetch
  //selectTeacherWithEmail();
  res.sendStatus('404');
});

module.exports = router;
