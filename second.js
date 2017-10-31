var january = '1';
var february = '2';
var march = '3';
var april ='4';
var may = '5';
var june = '6';
var july = '7';
var august = '8';
var september ='9';
var october = '10';
var november = '11';
var december = '12';
var month = 0;
while(month == 0){
var input_month = prompt("Input the month of your birth", "1").toLowerCase();
if (input_month != " "){
  month = 1;
}
}
  switch (input_month) {
    case january:
    case february:
    case december:
      alert('Hello in winter!');
      break;
    case march:
    case april:
    case may:
      alert('Hello in spring!');
      break;
    case june:
    case july:
    case august:
      alert('Hello in summer!');
      break;
    case september:
    case october:
    case november:
      alert('Hello in autumn!');
      break;
    default:
      alert('This month does not exist!')
  }
