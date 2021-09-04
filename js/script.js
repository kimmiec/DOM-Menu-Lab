// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
];

//select and cache main element in variable called mainEl
const mainEl = document.querySelector("main");
// console.log('mainEl');

//set bg color of mainEl to value stored in --main-bg css custom property/use var(--main-bg) function
mainEl.style.backgroundColor = "var(--main-bg)";

//set content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//add a class of flex-ctr to mainEl
mainEl.setAttribute("class", "flex-ctr");

//^^^uhhh...come back to do it in classList way...??
// mainEl.classList.add("flex-ctr");

//check progress now!

//select and cache <nav id="top-menu"> element in variable --> topMenuEl
const topMenuEl = document.getElementById("top-menu");

//set height of topMenuEl to 100%
topMenuEl.style.height = "100%";

//set bg color of topMenuEl to value stored in the --top-menu-bg
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//add a class of flex-around to topMenuEl
topMenuEl.setAttribute("class", "flex-around");

//classList way
// topMenuEl.classList.add("flex-around");

//check progress!

//go back and copy data structure to the top!

//iterate over the entire menuLinks array and for each "link" object: *create <a> element 
const aTag = document.querySelector('a');

//*add href attribute with value set to href property of the "link" object



//*set new elements content to the value of the text property of "link" object



//append the new element to the topMenuEl element



//CHECK AND YOURE DONE

