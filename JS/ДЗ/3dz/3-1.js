var num1 = prompt('Enter first number')
var num2 = prompt('Enter second number')
var num3 = prompt('Enter third number')

if (num1 > num2 && num1 > num3) {
    alert(num1);
}
else if (num2 > num1 && num2 > num3) {
    alert(num2);
}
else if(num3>num1 && num3 > num2){
    alert(num3);
}