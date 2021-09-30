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

/* - Helper Functions - */

// returns the content between the h2 tags for divs in .landing__container class
const getSectionHeader = (div) => {
    return div.firstElementChild.textContent;
}

// for each section to be added to navBar:
// // get the header & id to populate the li content
// // create new li element, assign its content & id
// // append new li to navBar ul
const navBuilder = () => {
    for (let i=0; i<navSections.length; i++){
        let sectionHeader = getSectionHeader(navSections[i]);
        let navItem = document.createElement('li');
        // need to use id to implement scroll-to
        navItem.innerHTML = `<a id="nav-link-${i+1}">${sectionHeader}</a>`;
        navItem.className = 'nav-link'; // is this necessary?
        navBar.appendChild(navItem);
    }
}

// get dimensions in viewport for each section
const getRectSections = () => {
    let array = [];
    for (let i=0; i<sectionContainers.length; i++){
        let rect = sectionContainers[i].getBoundingClientRect();
        array.push(rect);
    }
    return array;
}

// NEED TO FIX VALUES FOR MOBILE (when section height > viewport height)
// returns the section currently in the viewport
const inViewport = () => {
    let rectSections = getRectSections();
    for (let index=0; index<rectSections.length; index++){
        if ((rectSections[index].top >= 0 && rectSections[index].height >= 300) || (rectSections[index].top <= 0 && rectSections[index].height > screen.height)){
            return index;
        }
    }
}

/* - Main Functions - */

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', navBuilder, false);

// Add class 'active' to section when near top of viewport
// // execute function every 500ms
setInterval( () => {
    // only execute the function when scrolling has been detected
    if ( hasScrolled ) {
        // reset boolean so scroll-check will remain accurate
        hasScrolled = false;
        // set section & nav item classes to "active" when that section is in the viewport
        for (let i=0; i<sectionContainers.length; i++){
            if (inViewport() === i){
                for (let h=0; h<sectionContainers.length; h++){
                    if (h === i) {
                        sectionContainers[h].classList.add('active-section');
                        navItems[h].classList.add('active');
                    } else {
                        sectionContainers[h].classList.remove('active-section');
                        navItems[h].classList.remove('active');
                    }
                }
            } 
        }
    }
}, 500);


/* - Events - */

// // toggle variable to 'true' when the user has started scrolling
let hasScrolled = false;
window.onscroll = () => hasScrolled = true;

// make header slightly transparent while user is scrolling
setInterval( () => {
    if ( !hasScrolled ) {
        pageHeader.setAttribute('style','background-color: rgba(79, 83, 100, 0.15)');
    }
    if ( hasScrolled ) {
        pageHeader.setAttribute('style','background-color: rgba(73, 75, 85, 0.3)');
        // navBar.setAttribute('style', 'display: none');
    }
}, 100);

// Scroll to section on link click

// // sets click listener for each item in navBar
// // prevents default jump; implements scroll instead

const scrollToSection = (index) => {
    navSections[index].scrollIntoView(true, {behavior: 'smooth', block: 'top', inline: 'nearest'});
}

// THIS ISN'T WORKING!
for (let i=0; i<navItems.length; i++){
    navItems[i].addEventListener('click', scrollToSection(i), false);
}

// add background to sticky header only when user has scrolled below the main hero image