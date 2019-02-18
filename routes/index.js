var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/change', function(req, res, next) {
  console.log("/change is called");
  res.render('index', { title: 'Express Change' });
  const exec = require('child_process').exec;
  //var command ='ls -alG ./ | wc -l';
  var command ='echo $PWD';
  const child = exec( command,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
});


module.exports = router;
