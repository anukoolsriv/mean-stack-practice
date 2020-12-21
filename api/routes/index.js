var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');


router
	.route('/hotels')
	.get(ctrlHotels.hotelsGetAll);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.hotelsGetOne);


router
	.route('/hotels/new')
	.post(ctrlHotels.hotelsAddOne);
	
// router
// 	.route('/hotels')
// 	.get(function(req, res){
// 	console.log('JSON Get');
// 	res
// 		.status(200)
// 		.json({"jsonData" : "GET Received"});
// 	});
	// .post(function(req, res){
	// console.log('JSON Post');
	// res
	// 	.status(200)
	// 	.json({"jsonData" : "POST Received"});
	// });

module.exports = router;