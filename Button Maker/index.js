let applyBtn = document.getElementById('apply')
let targetBtn = document.getElementById('custom-btn')
let color = document.getElementById('color')
let fontSize = document.getElementById('font-size')
let fontWeight = document.getElementById('font-weight')
let padding = document.getElementById('padding')
let borderRadius = document.getElementById('border-radius')

applyBtn.addEventListener('click',()=>{
    targetBtn.style.color = color.value
    targetBtn.style.fontSize = fontSize.value + 'px'
    targetBtn.style.fontWeight  = fontWeight.value
    targetBtn.style.padding = padding.value + 'px'
    targetBtn.style.borderRadius = `${borderRadius.value}px`;
})



