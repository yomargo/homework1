//if else method
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayname = days[d.getDay()];

if (dayname !== "Saturday" && dayname !== "Sunday") {
  console.log ("you need to work")
} else {
  console.log("have a good rest")
}
