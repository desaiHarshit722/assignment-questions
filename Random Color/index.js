let box = document.getElementById('Box')
let click  = document.getElementById('click')

let colors = ['red','green','blue','orange','purple','pink','gray','brown']
click.addEventListener('click',()=>{
    let randomColor =Math.ceil( Math.random()*8)
    box.style.backgroundColor = colors[randomColor]
})