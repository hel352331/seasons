var is_over = false;
while(is_over == false){
  var input_month = prompt('Input the month of your birth', '1').toLowerCase();
  switch (input_month) {
    case 'january':
    case 'february':
    case 'december':
    case '1':
    case '2':
    case '12':
      is_over == true;
      alert('Hello in winter!');
      break;
    case 'march':
    case 'april':
    case 'may':
    case '3':
    case '4':
    case '5':
      is_over == true;
      alert('Hello in spring!');
      break;
    case 'june':
    case 'july':
    case 'august':
    case '6':
    case '7':
    case '8':
      is_over == true;
      alert('Hello in summer!');
      break;
    case 'september':
    case 'october':
    case 'november':
    case '9':
    case '10':
    case '11':
      is_over == true;
      alert('Hello in autumn!');
      break;
    default:
      alert('This month does not exist!')
  }
}
