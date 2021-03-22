// This code sets the starting point of the number variable
let number = 0
let number2 = 0
let height = 0
document.getElementById('calculate').addEventListener('click', calculation)
// the code below takes the value of the textboxes, makes them numbers, and assigns them to variables. The variables are then applied to the trapezoid area formula.
function calculation () {
  number = document.getElementById('base-a').value
  number = parseInt(number)
  number2 = document.getElementById('base-b').value
  number2 = parseInt(number2)
  height = document.getElementById('height').value
  height = parseInt(height)
  number = number + number2
  number = number * height / 2
  document.getElementById('answer').innerHTML = number
}
