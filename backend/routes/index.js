var express = require('express');
var router = express.Router();

const postLogin =require ('../controllers/post.login.js');



async function isAuthenticated (req,res,next){
  if (req.session.teacherId){
    next();
    return
  }
  res.status(401).send('unauthorized(1)');
}

router.post('/login',postLogin);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
