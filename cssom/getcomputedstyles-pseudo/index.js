let box = document.querySelectorAll('.box')[0],
    op = document.querySelector('output');

op.innerHTML = window.getComputedStyle(box, '::before').width;

// ::firstline
let p = document.querySelector('.box1 p'),
    op1 = document.querySelectorAll('output')[1];

op1.innerHTML = window.getComputedStyle(p, '::first-line').color;

// ::placeholder
let input = document.querySelector('input'),
    op2 = document.querySelectorAll('output')[2];

op2.innerHTML = window.getComputedStyle(input, '::placehoder').color;

// different result when accessing styles of non-existent(but valid) pseudo element
// compared to an unsupported pseudo-element
let box3 = document.querySelector('.box3'),
    op3 = document.querySelectorAll('output')[3],
    op4 = document.querySelectorAll('output')[4];

op3.innerHTML = window.getComputedStyle(box, '::before').color;
op4.innerHTML = window.getComputedStyle(box, '::banana').color;
