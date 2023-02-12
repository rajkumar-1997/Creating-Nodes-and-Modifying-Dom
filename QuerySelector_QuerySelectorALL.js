// console.log('hello world');


// //parent element
// let A=document.querySelector('.title');
// console.log(A.parentElement);
// A.parentElement.style.backgroundColor='red';


// //lastelement child
// let b=document.querySelector('#items');
// console.log(b.lastElementChild);

// //lastchild
// let c=document.querySelector('#items');
// console.log(c.lastChild);


// //firstchild
// let d=document.querySelector('#items');
// console.log(d.firstChild);



// //firstelement child
// let e=document.querySelector('#items');

// e.firstElementChild.textContent='hello ';

// // //previoussibling
// let f=document.querySelector('#items');
// console.log(f.previousSibling);


// //previous element sibling
// let g=document.querySelector('#items');
// console.log(g.previousElementSibling);

// //next sibling
// let h=document.querySelector('#main');
// console.log(h.nextSibling);

// //next element sibling
// let i=document.querySelector('#main-header');
// console.log(i.nextElementSibling);


//create element
let newdiv=document.createElement('div');

//setting id and class
newdiv.className='myclass';
newdiv.id='myid';

//set attribute
newdiv.setAttribute('title','hello world');


//create textnode
let newtxtnode=document.createTextNode('HEllo word');


//add text to div
newdiv.appendChild(newtxtnode);

console.log(newdiv);

let container=document.querySelector('header .container');

let h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);







let sdiv=document.createElement('div');

//setting id and class
sdiv.className='s';
sdiv.id='sid';

//set attribute
sdiv.setAttribute('title','hello world');


//create textnode
let stxtnode=document.createTextNode('HEllo word');


//add text to div
sdiv.appendChild(stxtnode);
let newc=document.querySelector('div ul');
let it1=document.querySelector('ul #item1');
newc.insertBefore(sdiv,it1);
