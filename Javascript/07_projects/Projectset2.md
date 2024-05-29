
# Solution Code

## Project 2

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');

{
if (height === '' || height < 0 || isNaN(height)) {
  result.innerHTML = `Please give a valid height ${height}`;
}
else if (weight === '' || weight < 0 || isNaN(weight)) {
  result.innerHTML = `Please give a valid weight ${weight}`;
}
else {
  const bmi = (weight / ((height*height)/10000)).toFixed(2)
  result.innerHTML = `${bmi}`
}
}
const ind = document.querySelector('#index');
if (result.innerHTML < 18.6) {
  ind.innerHTML = ` Under Weight `;
}
else if (result.innerHTML >= 18.6 && result.innerHTML <= 24.9) {
  ind.innerHTML = ` Normal Weight `;
}
else {
  ind.innerHTML = ` OverWeight `;
}


}); 



```