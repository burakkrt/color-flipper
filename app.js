const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const container = document.querySelector('.container');
const btn = document.querySelector('#generate');
const colorCodeText = document.querySelector('.color-code');
const copycode = document.querySelector('#copycode');
const info = document.querySelector('.color-text');

btn.addEventListener('click', function() {
  const colorCode = randomColorCode();
  container.style.backgroundColor = colorCode;
  colorCodeText.style.color = colorCode;
  colorCodeText.textContent = colorCode;
  if (info.classList.contains('hidden')) {
    info.classList.toggle('hidden');
  }
});

copycode.addEventListener('click', function() {
  navigator.clipboard.writeText(colorCodeText.textContent)
    .then(() => {
      alert('copied to : ' + colorCodeText.textContent);
    });
});

function randomColorCode() {
  let colorCode = '#';
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * data.length);
    colorCode += data[randomNumber];
  }
  return colorCode;
}