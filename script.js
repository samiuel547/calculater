function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function calculateSquare() {
  const display = document.getElementById('display');
  display.value = Math.pow(Number(display.value), 2);
}

function calculateSqrt() {
  const display = document.getElementById('display');
  display.value = Math.sqrt(Number(display.value));
}

function calculatePercent() {
  const display = document.getElementById('display');
  display.value = Number(display.value) / 100;
}

function power() {
  const display = document.getElementById('display');
  display.value += '**';
}

function calculateSin() {
  const display = document.getElementById('display');
  display.value = Math.sin(Number(display.value) * Math.PI / 180);
}

function calculateCos() {
  const display = document.getElementById('display');
  display.value = Math.cos(Number(display.value) * Math.PI / 180);
}

function calculateTan() {
  const display = document.getElementById('display');
  display.value = Math.tan(Number(display.value) * Math.PI / 180);
}

function calculateLog() {
  const display = document.getElementById('display');
  display.value = Math.log10(Number(display.value));
}

function calculateLn() {
  const display = document.getElementById('display');
  display.value = Math.log(Number(display.value));
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

