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
// image galleries within sections
sectionGalleries = document.querySelectorAll('.thumbnail-container');
}// // boolean to track when user has started scrolling
let hasScrolled = false;


/* - Helper Functions - */

// returns the content between the h2 tags for divs in .landing__container class
const getSectionHeader = (div) => {
    return div.firstElementChild.textContent;
}

const getSectionId = (div) => {
    return div.parentElement.id;
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

// for each section to be added to navBar:
// // get the header & id to populate the li content
// // create new li element, assign its content & id
// // append new li to navBar ul
const navBuilder = () => {
    for (let i=0; i<navSections.length; i++){
        let sectionHeader = getSectionHeader(navSections[i]);
        let sectionId = getSectionId(navSections[i]);
        let navItem = document.createElement('li');
        // need to use id to implement scroll-to
        navItem.innerHTML = `<a data-id="${sectionId}" class="">${sectionHeader}</a>`;
        navBar.appendChild(navItem);
    }
}

// Add class 'active' to section & its nav item when near top of viewport
// // execute function every 500ms to check for scrolling
setInterval( () => {
    // only execute the function when scrolling has been detected
    if (hasScrolled) {
    // reset boolean so scroll-check will remain accurate
        hasScrolled = false;
        // toggle classes to "active" when that section is in the viewport
        for (let i=0; i<sectionContainers.length; i++){
            if (inViewport() === i){
                for (let h=0; h<sectionContainers.length; h++){
                    if (h === i) {
                        sectionContainers[h].classList.add('active-section');
                        navItems[h].classList.add('active');
                        sectionGalleries[h].classList.add('section-active');
                    } else {
                        sectionContainers[h].classList.remove('active-section');
                        navItems[h].classList.remove('active');
                        sectionGalleries[h].classList.remove('section-active');
                    }
                }
            } 
        }
    }
}, 500);


// changes header & nav styling if user has scrolled below the main hero image
const pastHero = () => {
    let belowFold = sectionContainers[0];
    if (window.scrollY >= belowFold.getBoundingClientRect().bottom) {
        // darken header
        pageHeader.classList.add('opaque');
        // change class of nav links to change text color
        for (let i=0; i<navItems.length; i++){
            navItems[i].firstElementChild.classList.add('belowHero');
        }
        return true;
    } else {
        // header nearly transparent
        pageHeader.classList.remove('opaque');
        // keep default nav link styling
        for (let i=0; i<navItems.length; i++){
            navItems[i].firstElementChild.classList.remove('belowHero');
        }
        return false;
    }
}

// scrolls to section when corresponding nav item clicked
scrollToSection= (event) => {
    if(event.target.nodeName === 'A'){
        let sectionId = event.target.getAttribute('data-id');
        let section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth", block: "end"});
    }
}

/* - Events - */

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', navBuilder, false);

// toggle boolean upon scroll
window.onscroll = () => hasScrolled = true;

// change header & nav styling when user scrolls below the fold
document.addEventListener('scroll', pastHero, false);

// Scroll to section on link click
navBar.addEventListener('click', (event) => {scrollToSection(event)}, false);