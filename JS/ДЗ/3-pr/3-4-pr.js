var one = "Yes, you`ve choosen me!"
var two = "No, I'm loose"
var num = prompt('Enter number');
if(num%2 == 0) {
 document.getElementById('0').innerHTML = one
}
else {
    document.getElementById('1').innerHTML = two
}