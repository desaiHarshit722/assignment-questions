let about = document.getElementById('about')
let timeToVisit = document.getElementById('time-to-visit')
let attractions = document.getElementById('attractions')
let empty = document.getElementById('empty')
about.addEventListener('click',()=>{
    empty.textContent  = `Varanasi, also known as Benares or Kashi, is one of the oldest continuously inhabited cities in the world and a major cultural, religious, and historical hub in India.`
})
timeToVisit.addEventListener('click',()=>{
    empty.textContent  = `The best time to visit Varanasi is during the cooler months from October to March.`
})
attractions.addEventListener('click',()=>{
    empty.textContent  = `
    Varanasi, one of the most ancient and culturally significant cities in India, is brimming with attractions that reflect its rich history, religious significance, and vibrant local life.`
})