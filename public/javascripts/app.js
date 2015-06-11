var submit = document.getElementsByTagName("button")[0];
var amount = document.getElementsByTagName("span")[0];

submit.addEventListener("click", function () {
  var departure = document.getElementById("departure").value;
  var arrival = document.getElementById("arrival").value;
  var price;
  var bags = document.getElementById("bag-number").value;
  var bag;
  var bag_price;
  var seats = document.getElementById("seats").value;
  var seatprice
  var wifi = document.getElementById("wifi").checked;
  var wifiprice;
  var discount = document.getElementById("code").value;
  var discountprice;
  var final_price;
  flight(departure, arrival, price, bags, bag, bag_price, wifi, wifiprice, seats, seatprice, discount, discountprice, amount, final_price);
  event.preventDefault();
});
