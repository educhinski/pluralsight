document.querySelector('#output-1').innerHTML =
    window.getComputedStyle(document.body).background;

// getComputedStyle() returns all the initial values
// even if none of them is defined in the CSS
let op2 = document.querySelector('#output-2'),
    p = document.querySelector('#p1'),
    wgc = window.getComputedStyle(p);

op2.innerHTML = `${wgc.background}<br><br>
                ${wgc.animation}<br><br>
                ${wgc.flex}`;

// returns computed dimensions for width and height
let parent = document.querySelector('.parent'),
    child = document.querySelector('.child'),
    op3 = document.querySelector('#output-3');

parent.addEventListener('mouseup',
    function () {
        op3.innerHTML = `Parent width is: 
        ${window.getComputedStyle(parent).width} <br><br>
                         Child width is:
        ${window.getComputedStyle(child).width}`;
    }, false);

// ways to access properties using window.getComputedStyle()
el = document.body;
// dot notation, same as above
window.getComputedStyle(el).backgroundColor;

// square bracket notation (not recommended)
window.getComputedStyle(el)['background-color'];

// using getPropertyValue
window.getComputedStyle(el).getPropertyValue('background-color');

// using getPropertyValue() to access width
let parent1 = document.querySelectorAll('.parent')[1],
    child1 = document.querySelectorAll('.child')[1],
    op4 = document.querySelector('#output-4');

parent1.addEventListener('mouseup',
function() {
    op4.innerHTML = `Parent width is: 
    ${window.getComputedStyle(parent).getPropertyValue('width')} <br><br>
                     Child width is:
    ${window.getComputedStyle(child).getPropertyValue('width')}`;
}, false);