var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
/*
when someone types in the link (local host with port ) / route we will redirct the page towards that get request with that endpoint
*/


router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

