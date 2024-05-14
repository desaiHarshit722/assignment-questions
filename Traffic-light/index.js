let a = document.getElementById('stop')
let b = document.getElementById('Ready')
let c = document.getElementById('Go')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')

function red(){
    box1.style.backgroundColor = 'red'
}
function yellow(){
    box2.style.backgroundColor = 'yellow'
    box1.style.opacity = "0.4"
}
function go(){
    box3.style.backgroundColor = 'green'
    box2.style.opacity = "0.4"
}
