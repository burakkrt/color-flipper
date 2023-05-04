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
  const codes = [];
  for (let i = 0; i < 3; i++) {
    codes.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${codes[0]},${codes[1]},${codes[2]})`;
}