
function updateDisplay(value) {
  switch (value) {
    case 'AC':
      display.value = '';
      break;
    case 'DEL':
      display.value = display.value.toString().slice(0, -1);
      break;
    case '%':
      display.value = display.value / 100;
      break;
    case '/':
      display.value += '/';
      break;
    case '*':
      display.value += '*';
      break;
    case '-':
      display.value += '-';
      break;
    case '+':
      display.value += '+';
      break;
    case '.':
      display.value += '.';
      break;
    case '=':
      display.value = eval(display.value);
      break;
    default:
      display.value += value;
      break;
  }
}
