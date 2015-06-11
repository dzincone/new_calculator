var express = require('express');
var router = express.Router();
var airFare = require("../public/javascripts/logic.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Fare Calculator' });
});

router.post("/", function(req, res, next) {
  console.log(req.body)
  var departure = req.body.departure;
  var arrival = req.body.arrival;
  var price;
  var bags = req.body.baggie;
  var bag_price;
  var seats = req.body.seat;
  var seatprice;
  var wifi = req.body.wifi;
  var wifiprice;
  var discount = req.body.code;
  var discountprice;
  var final_price;
  var calculate = airFare.flight(departure, arrival, price, bags, bag_price, wifi, wifiprice, seats, seatprice, discount, discountprice, final_price);
res.send(calculate)
});


module.exports = router;
