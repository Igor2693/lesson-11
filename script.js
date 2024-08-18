'use strict';

const text = document.getElementById('text')
const btn = document.getElementById('e_btn')
const circle = document.getElementById('circle')
const square = document.getElementById('square')


const squareColor = function() {
  const color = text.value
  square.style.backgroundColor = color;
  btn.style.display = 'none';
}

btn.addEventListener('click', squareColor)


range.addEventListener('input', function (event) {
  const size = event.target.value;
  square.style.height = size + '%';
  square.style.width = size + '%';
});
