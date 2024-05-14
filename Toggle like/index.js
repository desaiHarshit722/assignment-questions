let a = document.getElementById('inner')
let b = document.getElementById('like-btn')
let c = document.getElementById('changeImg')

b.addEventListener("click",()=>{
    a.style.color = 'white'
    c.src  = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600"
   a.classList.toggle('black')
})