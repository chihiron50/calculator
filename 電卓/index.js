
let indicatValue =  document.getElementById('number');

let Reserve = 0;
let swicth = ''


console.log(Math.sqrt(4096))


let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let zerozero = document.getElementById('zerozero');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divided = document.getElementById('divided');
let ac = document.getElementById('ac');
let equal = document.getElementById('equal');
let remainder = document.getElementById('remainder');
let sqrt = document.getElementById('sqrt');



one.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +1;
    console.log(indicatValue.value)
})
two.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +2;
    console.log(indicatValue.value)
})

three.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +3;
    console.log(indicatValue.value)
})

four.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +4;
    console.log(indicatValue.value)
})

five.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +5;
    console.log(indicatValue.value)
})

six.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +6;
    console.log(indicatValue.value)
})

seven.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +7;
})
eight.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +8;
})

nine.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +9;
})

zero.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 10 +0;
})





zerozero.addEventListener('click',()=>{
    indicatValue.value = parseInt(indicatValue.value)* 100 +0;

    
})

sqrt.addEventListener('click',()=>{
    indicatValue.value = Math.sqrt(parseInt(indicatValue.value))
})

plus.addEventListener('click',()=>{
    Reserve = indicatValue.value
    indicatValue.value = 0;
    swicth = 'plus'
})
minus.addEventListener('click',()=>{
    Reserve = indicatValue.value
    indicatValue.value = 0;
    swicth = 'minus'
})

times.addEventListener('click',()=>{
    Reserve = indicatValue.value
    indicatValue.value = 0;
    swicth = 'times'
})

divided.addEventListener('click',()=>{
    Reserve = indicatValue.value
    indicatValue.value = 0;
    swicth = 'divided'
})

ac.addEventListener('click',()=>{
    indicatValue.value = 0;
})
equal.addEventListener('click',()=>{
    if (swicth == 'plus'){
    indicatValue.value =parseInt(Reserve) + parseInt(indicatValue.value)
    }
    if (swicth =='minus'){
        indicatValue.value = Reserve -parseInt(indicatValue.value)
    }
    if (swicth == 'times'){
        indicatValue.value = Reserve *indicatValue.value
    if (swicth == 'divided'){
        indicatValue.value = Reserve /indicatValue.value
    }
})
