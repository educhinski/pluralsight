// Will only apply to inline styles on the element
let myInputs = document.querySelectorAll('input'),
    op = document.querySelector('output'),
    body = document.body;

body.style.background = 'transparent';
op.innerHTML = 'trasparent';

for (i of myInputs) {
    (function (i) {
        i.addEventListener('focus', function () {
            body.style.backgroundColor = this.value;
            op.innerHTML = this.value;
        });
    })(i);
}

// defining an inline style on the <body>
document.body.style.backgroundColor = 'lightblue';
console.log(document.body.style.backgroundColor);

// trying to read another property on the element
// returns nothing if inline style does not exist
console.log(document.body.style.color);
// even if there was external style sheet 
// that defined the color property on the <body> element
