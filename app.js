let btn = document.querySelector('#button1')
let res = document.querySelector('#span1')
let bukva = ''
btn.addEventListener('click', function() {
let text1 = document.querySelector('#text1').value 
switch (text1[0]){
case 'C':
bukva = 261.63
break;
case 'D':
bukva = 293.66
break;
case 'E':
bukva = 329.63
break;
case 'F':
bukva = 349.23
break;
case 'G':
bukva = 392.00
break;
case 'A':
bukva = 440.00
break;
case 'B':
bukva = 493.88
break;
default: 
bukva = 'Такой ноты нет'};
if(bukva == 'Такой ноты нет' || text1[1] == undefined || text1[1] == 9 || text1[1] == '-' ){
res.innerHTML = 'Такой ноты нет'
}else{res.innerHTML = (1*bukva) / 2**(4 - text1[1])}})







let btn2 = document.querySelector('#button2')
let res2 = document.querySelector('#span2')
btn2.addEventListener('click', function() {
let text2 = document.querySelector('#text2').value 
switch (text2[0]){
case 'A':
    {switch (text2[1]){
    case '+':
    res2.innerHTML = 4.0
    break;
    case undefined:
    res2.innerHTML = 4.0
    break;
    case '-':
    res2.innerHTML = 3.7
    break;
default: res2.innerHTML = 'Такой оценки нет'}}
    break;
    case 'B':
    {switch (text2[1]){
    case '+':
    res2.innerHTML = 3.3
    break;
    case undefined:
    res2.innerHTML = 3.0
    break;
    case '-':
    res2.innerHTML = 2.7
    break;
default: res2.innerHTML = 'Такой оценки нет'}}
    break;
    case 'C':
    {switch (text2[1]){
    case '+':
    res2.innerHTML = 2.3
    break;
    case undefined:
    res2.innerHTML = 2.0
    break;
    case '-':
    res2.innerHTML = 1.7
    break;
default: res2.innerHTML = 'Такой оценки нет'}}
    break;
    case 'D':
    {switch (text2[1]){
    case '+':
    res2.innerHTML = 1.3
    break;
    case undefined:
    res2.innerHTML = 1.0
    break;
default: res2.innerHTML = 'Такой оценки нет'}}
    break;
    case 'F':
    res2.innerHTML = 0
    break;
default: res2.innerHTML = 'Такой оценки нет'}})