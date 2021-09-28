/* - Global Variables - */

// ul populated by js below
const navBar = document.getElementById('navbar__list');
// navBar lis 
const navItems = navBar.children;
// header containing navBar
const pageHeader = document.querySelector('.page__header');
// divs containing content of sections to be linked from navBar
const navSections = document.querySelectorAll('.landing__container');
// sections linked from navBar
const sectionContainers = []
for (i=0; i<navSections.length; i++){
    let sectionElement = navSections[i].parentElement;
    sectionContainers.push(sectionElement);
}
// first paragraph within sections linked from navBar
const sectionParagraphs = []
for (i=0; i<navSections.length; i++){
    let sectionParagraph = navSections[i].querySelector('p');
    sectionParagraphs.push(sectionParagraph);
}

/* - Helper Functions - */

// returns the content between the h2 tags for divs in .landing__container class
function getSectionHeader (div) {
    return div.firstElementChild.textContent;
}
// returns the id of the section which contains each div in .landing__container class
function getSectionId (div) {
    return div.parentElement.id;
}

// for each section to be added to navBar:
// // get the header & id to populate the li content
// // create a new li element
// // set the content & id of new li
// // append new li to navBar ul
function navBuilder () {
    for (let i=0; i<navSections.length; i++){
        let sectionHeader = getSectionHeader(navSections[i]);
        let sectionId = getSectionId(navSections[i]);
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a href="#${sectionId}">${sectionHeader}</a>`;
        navItem.id = `nav-link-${i+1}`
        navItem.className = 'nav-link'
        navBar.appendChild(navItem);
    }
}

// returns the section currently in the viewport
function inViewport() {
    const rectSection1 = sectionParagraphs[0].getBoundingClientRect();
    const rectSection2 = sectionParagraphs[1].getBoundingClientRect();
    const rectSection3 = sectionParagraphs[2].getBoundingClientRect();
    if (rectSection1.top >= 0 && rectSection1.left >= 0 && rectSection1.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rectSection1.right <= (window.innerWidth || document. documentElement.clientWidth)){
        return 'Section 1';
    } else if (rectSection2.top >= 0 && rectSection2.left >= 0 && rectSection2.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rectSection2.right <= (window.innerWidth || document. documentElement.clientWidth)){
        return 'Section 2';
    } else if (rectSection3.top >= 0 && rectSection3.left >= 0 && rectSection3.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rectSection3.right <= (window.innerWidth || document. documentElement.clientWidth)){
        return 'Section 3';
    } else {
        return 'other';
    }
}

// toggles section & corresponding navItem to active when in viewport
function sectionVisible () {
    // ADJUST TO DETECT CHANGE IN inViewport output
    let t1=performance.now();
    let inViewportT1 = inViewport();
    


    if (inViewport() === 'Section 1'){
        sectionContainers[0].classList.toggle("active-section");
        navItems[0].classList.toggle('active');
        return 'Section 1 active';
    } 
    if (inViewport() === 'Section 2'){
        sectionContainers[1].classList.toggle("active-section");
        navItems[1].classList.toggle('active');
        return 'Section 2 active';
    }
    if (inViewport() === 'Section 3'){
        sectionContainers[2].classList.toggle("active-section");
        navItems[2].classList.toggle('active');
        return 'Section 3 active';
    }
}
setTimeout(sectionVisible, 1000);
    
/* - Main Functions - */

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', navBuilder, false);

// Scroll to anchor ID using scrollTO event

// // sets click listener for each item in navBar
// // prevents default jump and implements scroll instead
for (let i=0; i<navItems.length; i++){
    navItems[i].addEventListener('click', function (event) {
        event.preventDefault();
        navSections[i].scrollIntoView(true, {behavior: 'smooth', block: 'top', inline: 'nearest'});
    });
}

// Add class 'active' to section when near top of viewport

// // 
document.addEventListener('scroll', sectionVisible, false);
// document.addEventListener('scroll', scrollStopper, false);


/* - Events - */


// Scroll to section on link click





