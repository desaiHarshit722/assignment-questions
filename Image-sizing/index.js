let a = document.getElementById("img-inc-dec")
let b  =document.getElementById("plus")
let c  =document.getElementById("minus")

b.addEventListener('click',()=>{
    a.style.transform   =  "scale(1.4)"
    
})
c.addEventListener('click',()=>{
    a.style.transform   =  "scale(1)"
    
})
