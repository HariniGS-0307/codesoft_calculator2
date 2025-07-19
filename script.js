let input = '';

function press(value) {
  input += value;
  document.getElementById('display').innerText = input;
}

function clearDisplay() {
  input = '';
  document.getElementById('display').innerText = '0';
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById('display').innerText = input;
  } catch {
    document.getElementById('display').innerText = 'Error';
    input = '';
  }
}
