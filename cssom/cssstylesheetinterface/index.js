// API allow you to write a stylesheet
// that has readable and writable values
// uses styleSheets property that exposes CSSStyleSheet Interface

// cssRules **  
//   -list of all CSS rules(including declaration blocks, at-rules, media rules...)
document.styleSheets.length;
document.styleSheets[0];

// working with a stylesheet Object
let myRules = document.styleSheets[0].cssRules,
	p = document.querySelectorAll('p')[0];

for (i of myRules) {
	if (i.type === 1) {
		p.innerHTML += `<code>${i.selectorText}</code><br>`;
	}
}

// STYLE_RULE constant type
// selectorText - string rep of the selector used on that rule, writable
let myRules1 = document.styleSheets[0].cssRules,
	p2 = document.querySelectorAll('.output')[0],
	p3 = document.querySelectorAll('.output')[1],
	btn = document.querySelector('button');

for (i of myRules1) {
	if (i.type === 1) {
		p2.innerHTML += `<code>${i.selectorText}</code><br>`;
	}
};

btn.addEventListener('click', function () {
	for (i of myRules1) {
		if (i.type === 1) {
			if (i.selectorText === 'a:hover') {
				i.selectorText = 'a:hover, a:active';
			}
		}
		this.disabled = true;
		this.style.cursor = 'not-allowed';
	}

	for (j of myRules1) {
		if (j.type === 1) {
			p3.innerHTML += `<code> ${j.selectorText} </code><br>`;
		}
	}
}, false);

// Accessing @media Rules with the CSSOM
// type(4)
let myRules2 = document.styleSheets[0].cssRules,
	p4 = document.querySelectorAll('.output')[2];

for (i of myRules2) {
	if (i.type === 4) {
		for (j of i.cssRules) {
			p4.innerHTML += `<code>${j.selectorText}</code><br>`;
		}
	}
}

// conditionText property :extra:
// also: mediaText, return the same
// can get or set either
let myRules3 = document.styleSheets[0].cssRules,
	p5 = document.querySelectorAll('.output')[3];

for (i of myRules) {
	if (i.type === 4) {
		p5.innerHTML += `<code>${i.conditionText}</code><br>`;
	}
}

// Accessing @keyframes Rules with the CSSOM
// type(7)
let myRules4 = document.styleSheets[0].cssRules,
	p6 = document.querySelectorAll('.output')[4];

for (i of myRules4) {
	if (i.type === 7) {
		for (j of i.cssRules) {
			p6.innerHTML += `<c​ode>${j.keyText}</c​ode><br>`;
		}
	}
}

// value of keyText can also be set
let myRules5 = document.styleSheets[0].cssRules,
	p7 = document.querySelectorAll('.output')[5],
	p8 = document.querySelectorAll('.output')[6],
	btn2 = document.querySelectorAll('button')[1];

for (i of myRules5) {
	if (i.type === 7) {
		for (j of i.cssRules) {
			p7.innerHTML += `<code>${j.keyText}</code><br>`;
		}
	}
}

btn2.addEventListener('click', function () {
	document.styleSheets[0].cssRules[6].cssRules[0].keyText = '10%';

	for (i of myRules) {
		if (i.type === 7) {
			for (j of i.cssRules) {
				p8.innerHTML += `<code>${j.keyText}</code><br>`;
			}
		}
	}
	this.disabled = true;
	this.style.cursor = 'not-allowed';
}, false);

// name - property of using @keyframes
// same name that would be used in the naimation-name property when 
// enabling the animation of specific element
let myRules6 = document.styleSheets[0].cssRules,
	p9 = document.querySelectorAll('.output')[7];

for (i of myRules6) {
	if (i.type === 7) {
		p9.innerHTML += `<code>${i.name}</code><br>`;
	}
}

// grabbing specific styles inside a single keyframe
// takeaway: style property *!user action or web-based game....
let myRules7 = document.styleSheets[0].cssRules,
	p10 = document.querySelectorAll('.output')[8];

for (i of myRules) {
	if (i.type === 7) {
		for (j of i.cssRules) {
			p10.innerHTML += `<code>${j.style.color}</code><br>`;
		}
	}
}

// Adding and Removing CSS Declarations
// insertRule() and deleteRule()
// insertRule() = takes a string and index
let myStylesheet = document.styleSheets[0],
	p11 = document.querySelectorAll('.output')[9],
	p12 = document.querySelectorAll('.output')[10];

p11.innerHTML += myStylesheet.cssRules.length;
document.styleSheets[0].insertRule('article { line-height: 1.5; font-size: 1.5em; }', myStylesheet.cssRules.length);
p12.innerHTML += myStylesheet.cssRules.length;

// deleteRule() = takes the index
let myStylesheet2 = document.styleSheets[0],
	p13 = document.querySelectorAll('.output')[11],
	p14 = document.querySelectorAll('.output')[12];

p13.innerHTML += myStylesheet.cssRules.length;
myStylesheet2.deleteRule(3);
p14.innerHTML += myStylesheet.cssRules.length;

// Revisiting the CSSStyleDeclaration API
// can be exposed on an individual style rule 
// as a subset of CSSStyleSheet API

// Example of using these methods on an individual style rule in our sample stylesheet

// Grab the "body" and "main" style rules
let myBodyRule = document.styleSheets[0].cssRules[1].style,
	myMainRule = document.styleSheets[0].cssRules[2].style,
	p15 = document.querySelectorAll('.output')[13];

// Set the bg color
myBodyRule.setProperty('background-color', 'peachpuff');

// Get the font size
p15.innerHTML += `font-size is: <code> ${myBodyRule.getPropertyValue('font-size')} </code><br>`;

// Get the 5th item in the style rule
p15.innerHTML += `5th item in the style rule is: <code>${myBodyRule.item(5)}</code><br>`;

// Log the current length of the body style rule (8)
p15.innerHTML += `Length of the style rule: <code>${myBodyRule.length}</code><br>`;

// Remove the line height
myBodyRule.removeProperty('line-height');

// log the length again (7)
p15.innerHTML += `Length of the style rule after removing line-height: <code>${myBodyRule.length}</code><br>`;

// Check the priority of font-family (empty string)
p15.innerHTML += `Priority of font-family is: <code>${myBodyRule.getPropertyPriority('font-family')}</code><br>`;

// Check property priority of margin in the "main" style rule
p15.innerHTML += `Priority of margin on main element is: <code>${myMainRule.getPropertyPriority('margin')}</code>`;

