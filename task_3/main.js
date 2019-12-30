var num1 = 10
var num2 = 39
var num3 = 88
var result = 0
var varname = ""

if (num1 < num2) {
  result = num1
  varname = "num1"
} 
else if (num1 < num3) {
  result = num1
  varname = "num1"
}

if (num2 < num1) {
  result = num2
  varname = "num2"
}
else if (num2 < num3) {
  result = num2
  varname = "num2"
}

if (num3 < num1) {
  result = num3
  varname = "num3"
}
else if (num3 < num2) {
  result = num3
  varname = "num3"
}

console.log(varname + ":" + result)