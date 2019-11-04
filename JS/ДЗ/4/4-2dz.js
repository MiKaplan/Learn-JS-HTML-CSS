var i = 0;
var resR=0;

var a = prompt("Enter number");
while (a != "stop") {
  resR+=a*1;
  i++;
  resR = resR / i;
  a = prompt("Enter number");
 
}

alert(resR);
