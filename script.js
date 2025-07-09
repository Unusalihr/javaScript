document.getElementById('changeText').addEventListener('click', function() {
  document.getElementById('demo').textContent = 'Paragraph changed.';
});

let count = 0;
const countValue = document.getElementById('countValue');

document.getElementById('increment').addEventListener('click', () => {
  count++;
  countValue.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  countValue.textContent = count;
});

const echoInput = document.getElementById('echoInput');
const echoOutput = document.getElementById('echoOutput');

echoInput.addEventListener('input', () => {
  echoOutput.textContent = echoInput.value;
});
