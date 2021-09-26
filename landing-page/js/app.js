/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* - Global Variables - */
const navBar = document.getElementById('navbar__list');
const navItems = document.querySelectorAll('.landing__container');

/* - Helper Functions - */
function getSectionHeader (div) {
    return div.firstElementChild.textContent;
}


/* - Main Functions - */


// build the nav
let navHeaders = '';
for (i=0; i<navItems.length; i++){
    let sectionHeader = getSectionHeader(navItems[i]);
    navHeaders += `<li>${sectionHeader}</li>`;
}
navBar.innerHTML = navHeaders;


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


