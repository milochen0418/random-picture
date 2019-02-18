var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/change/:number', function(req, res, next) {
  console.log("/change is called");
  res.render('index', { title: 'Express Change' });
  const exec = require('child_process').exec;
  //var command ='ls -alG ./ | wc -l';
  var command ='echo $PWD';
  arg = req.params.number;
  console.log('/change/: req.params.number = ' + arg);
  var command = './set_new_random_picture.sh ' + arg;
  const child = exec( command,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
});

// params process example
router.get('/documents/:format/:type', function (req, res) {
	   var format = req.params.format,
	        type = req.params.type;
		console.log("format = " + format + ", type = " + type);
});


module.exports = router;
