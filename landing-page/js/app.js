/* - Global Variables - */
const pageHeader = document.querySelector('.page__header');
const navBar = document.getElementById('navbar__list');
const navSections = document.querySelectorAll('.landing__container');

/* - Helper Functions - */

// returns the content between the h2 tags for divs in the .landing__container class
function getSectionHeader (div) {
    return div.firstElementChild.textContent;
}
// returns the id of the section which contains each div in the .landing__container class
function getSectionId (div) {
    return div.parentElement.id;
}


/* - Main Functions - */



// build the nav
const navItems = [];
let navItemString = "";
for (i=0; i<navSections.length; i++){
    let sectionHeader = getSectionHeader(navSections[i]);
    let sectionId = getSectionId(navSections[i]);
    let navItem= `<li id="nav-link-${i+1}"><a href="#${sectionId}">${sectionHeader}</a></li>`;
    navItemString += navItem;
    navItems.push(navItem);
}
navBar.innerHTML = navItemString;

// save each navItem so they can be an event target
// (try to automate this later in case more nav items are added)
const nav1 = document.getElementById('nav-link-1');
const nav2 = document.getElementById('nav-link-2');
const nav3 = document.getElementById('nav-link-3');


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

//repeat this for other nav items
nav1.addEventListener('click',(event) => {
    // swap this out for scroll command
    console.log('testing the click listener');
});



/* - Events - */


// Scroll to section on link click


// Set sections as active



// document.addEventListener('DOMContentLoaded', (event) => {
//     pageHeader.setAttribute('style', 'display: none');
// });
// window.addEventListener('scroll',(event) => {
//     pageHeader.setAttribute('style', 'background-color: #000000e4');
// });
// navLinks.addEventListener('click',(event) => {
//     console.log('testing the click listener');
// });

// const elementInView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;
 
//     return (
//       elementTop <= (window.innerHeight || document.documentElement.clientHeight)
//     );
//   };
