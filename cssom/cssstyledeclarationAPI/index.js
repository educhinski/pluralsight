// getComputedStyle(), values are read-only
// element.style, getting and setting is possible, but will affect inline styles only

let box = document.querySelectorAll('.box')[0],
    op = document.querySelectorAll('output')[0],
    op1 = document.querySelectorAll('output')[1];

box.style.setProperty('color', 'orange');
box.style.setProperty('font-family', 'Georgia, serif');
op.innerHTML = box.style.getPropertyValue('color'); // exposes a CSSStyleDeclaratioj obj
op1.innerHTML = `${box.style.item(0)}, ${box.style.item(1)}`;

// setProperty(), removeProperty() - use format as in stylesheet(hyphenated)

// using removeProperty()
let box1 = document.querySelectorAll('.box')[1],
    btn = document.querySelectorAll('button')[0],
    op2 = document.querySelectorAll('output')[2];

box1.style.setProperty('font-size', '1.5em');
op2.innerHTML = box.style.item(0);

btn.addEventListener('click', function () {
    box1.style.removeProperty('font-size');
    this.disabled = true;
    this.style.cursor = 'not-allowed';
}, false);

// Getting and Setting a Property's Priority
let box2 = document.querySelectorAll('.box')[2],
    op3 = document.querySelectorAll('output')[3],
    op4 = document.querySelectorAll('output')[4];

box2.style.setProperty('font-family', 'Georgia, serif', 'important');
box2.style.setProperty('font-size', '1.5em');

op3.innerHTML = box2.style.getPropertyPriority('font-family');
op4.innerHTML = box2.style.getPropertyPriority('font-size');

// setting important in a shorthand property sets 
// all longhand properties as important, and all associated
let box3 = document.querySelectorAll('.box')[3],
    op5 = document.querySelectorAll('output')[5];

op5.innerHTML = `${box3.style.getPropertyPriority('border')}<br>
                 ${box3.style.getPropertyPriority('border-top-width')}<br>
                 ${box3.style.getPropertyPriority('border-bottom-width')}<br>
                 ${box3.style.getPropertyPriority('border-color')}<br>
                 ${box3.style.getPropertyPriority('border-style')}`;
