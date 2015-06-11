  module.exports = {

    flight: function (departure, arrival, price, bags, bag_price, wifi, wifiprice, seats, seatprice, discount, discountprice, final_price) {
   if (departure === arrival || departure === "none" || arrival === "none"){
     return "Please choose a different Departure and Arrival";
     //
    //   } else if (bags.includes("-")) {
    //  return "Please choose a positive amount of bags or 0";
      } else {
         if (departure === "New York" && arrival === "Los Angeles") {
         price = "545";
       } else if (departure === "New York" && arrival === "Chicago") {
         price = "250";
       } else if (departure === "Chicago" && arrival === "New York") {
         price = "250";
       } else if (departure === "Chicago" && arrival === "Los Angeles") {
         price = "350";
       } else if (departure === "Los Angeles" && arrival === "New York") {
         price = "545";
       } else if (departure === "Los Angeles" && arrival === "Chicago") {
         price = "350";
       } else {
         price = "0";
       };

       if (bags >= "0") {
         bag_price = bags;
       } else{
         bag_price = 0;
       };

       if (seats === "200") {
         seatprice = "200";
       } else if (seats === "500") {
         seatprice = "500";
       } else {
         seatprice = "0";
       };

       if (wifi === "on") {
         wifiprice = "12";
       } else {
         wifiprice = "0";
       };

       if (discount === "10OFF") {
         discountprice = .9;
       } else if (discount === "20OFF") {
         discountprice = .8;
       } else {
         discountprice = 1;
       };

       final_price = (parseInt(price) + parseInt(bag_price * 25) + parseInt(wifiprice) + parseInt(seatprice)) * discountprice;

       return parseFloat(final_price).toFixed(2);
}}
}
