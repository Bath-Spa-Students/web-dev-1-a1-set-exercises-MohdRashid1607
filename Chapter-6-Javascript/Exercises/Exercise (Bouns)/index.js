const colors = generateRandomColors(3);
let correctColorIndex = Math.floor(Math.random() * 3);
let score = 0;

const colorDisplay = document.getElementById('colorDisplay');
const message = document.getElementById('message');
const options = document.getElementById('options');
const scoreValue = document.getElementById('scoreValue');
const replayButton = document.getElementById('replayButton');

// Display the RGB color value to guess
colorDisplay.textContent = colors[correctColorIndex];

// Create color option elements
for (let i = 0; i < colors.length; i++) {
  const option = document.createElement('div');
  option.classList.add('option');
  option.style.backgroundColor = colors[i];
  option.addEventListener('click', () => checkAnswer(i));
  options.appendChild(option);
}

// Function to check the selected color
function checkAnswer(index) {
  if (index === correctColorIndex) {
    message.textContent = 'Correct!';
    score++;
    scoreValue.textContent = score;
  } else {
    message.textContent = 'Incorrect! Try again.';
  }
}

// Function to generate random RGB color values
function generateRandomColors(num) {
  const colorsArray = [];
  for (let i = 0; i < num; i++) {
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    colorsArray.push(color);
  }
  return colorsArray;
}

// Function to reset the game
function resetGame() {
  colors.forEach((color, index) => {
    options.children[index].style.backgroundColor = color;
  });
  correctColorIndex = Math.floor(Math.random() * 3);
  colorDisplay.textContent = colors[correctColorIndex];
  message.textContent = '';
}

// Event listener for replay button
replayButton.addEventListener('click', () => {
  score = 0;
  scoreValue.textContent = score;
  resetGame();
});
