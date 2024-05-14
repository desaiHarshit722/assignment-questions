function calculate(){


let bill = document.getElementById('bill').value
let percentage  =document.getElementById('percentage').value


let tip = bill *(percentage/100)
let total = Number(bill) + tip;

document.getElementById('tip').textContent = 'Tip=' + tip
document.getElementById('total').textContent = 'Total='+ total
}
