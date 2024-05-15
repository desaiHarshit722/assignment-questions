
let check = document.getElementById('check');
let empty = document.getElementById('empty');

check.addEventListener('click', () => {
    let yourNumber = parseInt(document.getElementById('yourNumber').value);
    let randomNumber = Math.ceil(Math.random() * 100);
    if (isNaN(yourNumber) || yourNumber < 1 || yourNumber > 100) {
        empty.style.color = 'black';
        empty.textContent = "Please enter a valid number between 1 and 100.";
    } else if (yourNumber < randomNumber) {
        empty.style.color = 'green';
        empty.textContent = "Too low!";
    } else if (yourNumber > randomNumber) {
        empty.style.color = 'red';
        empty.textContent = "Too high!";
    } else {
        empty.style.color = 'blue';
        empty.textContent = "Congratulations! You guessed the correct number!";
    }
});
