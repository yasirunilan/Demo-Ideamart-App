const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://yasiru:root@ds131384.mlab.com:31384/mean-demo', ['messages']);


//get all messages
router.get('/', function (req, res, next) {
  db.messages.find(function (err, messages) {
    if(err){
      res.send(err)
    }
    res.json(messages);
  });
});

//get single message
router.get('/message/:id', function (req, res, next) {
  db.messages.findOne({_id:mongojs.ObjectID(req.params.id)}, function (err, messages) {
    if(err){
      res.send(err)
    }
    res.json(messages);
  });
});

//save message
router.post('/message', function (req, res, next) {
  var message = req.body;
  if(!message.text) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    db.messages.save(message, function (err, message) {
      if(err){
        res.send(err)
      }
      res.json(message)
    });
  }
})

//delete task
router.delete('/message/:id', function (req, res, next) {
  db.messages.remove({_id:mongojs.ObjectID(req.params.id)}, function (err, message) {
    if(err){
      res.send(err)
    }
    res.json(message);
  });
});


module.exports = router;
