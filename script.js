'use strict';

const text = document.getElementById('text')
const btn = document.getElementById('e_btn')
const circle = document.getElementById('circle')
const square = document.getElementById('square')
let color = ''
let size = ''


const squareColor = function() {
  square.style.backgroundColor = color;
  btn.style.display = 'none';
}

text.addEventListener('change', function (event){
  color = event.target.value
})

btn.addEventListener('click', squareColor)


range.addEventListener('input', function (event) {
  size = event.target.value;
  square.style.height = size + '%';
  square.style.width = size + '%';
});
