var hotelData = require('../data/hotel-data.json');

var hotelsGetAll = function(req,res) {
	console.log('hotel Data');
	console.log(req.query);

	var offset = 0;
	var count = 10;

	if(req.query && req.query.offset) {
		offset = parseInt(req.query.offset,10);
	}

	if(req.query && req.query.count) {
		count = parseInt(req.query.count,10);
	}

	var returnData = hotelData.slice(offset,offset+count);
	
	res
		.status(200)
		.json(returnData);
}

var hotelsGetOne = function(req,res) {

	var hotelId = req.params.hotelId;
	var hotel = hotelData[hotelId];

	console.log('GET hotel Id : ' + hotelId);
	res
		.status(200)
		.json(hotel);
}

var hotelsAddOne = function(req,res) {

	console.log('POST New Notel');
	console.log(req.body);

	res
		.status(200)
		.json(req.body);

}

module.exports = {
	hotelsGetAll : hotelsGetAll,
	hotelsGetOne : hotelsGetOne,
	hotelsAddOne : hotelsAddOne
}