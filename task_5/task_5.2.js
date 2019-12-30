//ternary operator method
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayname = days[d.getDay()];

dayname === "Saturday" ? console.log("have a good rest") : console.log ("you need to work")

dayname === "Sunday" ? console.log("have a good rest") : console.log ("you need to work")