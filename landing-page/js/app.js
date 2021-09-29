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
// returns the id of the section which contains each div in .landing__container class
const getSectionId = (div) => {
    return div.parentElement.id;
}

// for each section to be added to navBar:
// // get the header & id to populate the li content
// // create new li element, assign its content & id
// // append new li to navBar ul
const navBuilder = () => {
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

// get dimensions in viewport for each section
const getRectSections = () => {
    let array = [];
    for (let i=0; i<sectionContainers.length; i++){
        let rect = sectionContainers[i].getBoundingClientRect();
        array.push(rect);
    }
    return array;
}

// returns the section currently in the viewport
const inViewport = () => {
    let rectSections = getRectSections();
    for (i=0; i<rectSections.length; i++){
        if (rectSections[i].top >= 0 && rectSections[i].left >= 150){
            i++;
            return `Section ${i}`;
        }
    }
}

/* - Main Functions - */

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', navBuilder, false);

// Add class 'active' to section when near top of viewport

// // execute function every 500ms
setInterval( () => {
    if ( hasScrolled ) {
        // reset boolean 
        hasScrolled = false;
        // add "active" classes to section & its nav item when that section is in the viewport

        //more concise draft — doesn't work yet
        // for (let h=1; h<(sectionContainers.length+1); h++){
        //     while (inViewport() === `Section [h]`){
        //         for (let i=0; i<sectionContainers.length; i++){
        //             console.log(`i=${i}`);
        //             if (i === (h-1)) {
        //                 sectionContainers[i].classList.add('active-section');
        //                 navItems[i].classList.add('active');
                        
        //             } else {
        //                 sectionContainers[i].classList.remove('active-section');
        //                 navItems[i].classList.remove('active');
        //             }
        //         }
        //         console.log(`h=${h}`);
        //     }
        // }

        if (inViewport() === 'Section 1'){
            for (let i=0; i<sectionContainers.length; i++){
                if (i === 0) {
                    sectionContainers[i].classList.add('active-section');
                    navItems[i].classList.add('active');
                } else {
                    sectionContainers[i].classList.remove('active-section');
                    navItems[i].classList.remove('active');
                }
            }
        } else if (inViewport() === 'Section 2'){
            for (let i=0; i<sectionContainers.length; i++){
                if (i === 1) {
                    sectionContainers[i].classList.add('active-section');
                    navItems[i].classList.add('active');
                } else {
                    sectionContainers[i].classList.remove('active-section');
                    navItems[i].classList.remove('active');
                }
            }
        } else if (inViewport() === 'Section 3'){
            for (let i=0; i<sectionContainers.length; i++){
                if (i === 2) {
                    sectionContainers[i].classList.add('active-section');
                    navItems[i].classList.add('active');
                } else {
                    sectionContainers[i].classList.remove('active-section');
                    navItems[i].classList.remove('active');
                }
            }
        } else if (inViewport() === 'Section 4'){
            for (let i=0; i<sectionContainers.length; i++){
                if (i === 3) {
                    sectionContainers[i].classList.add('active-section');
                    navItems[i].classList.add('active');
                } else {
                    sectionContainers[i].classList.remove('active-section');
                    navItems[i].classList.remove('active');
                }
            }
        }
    }
}, 500);

setInterval( () => {
    if ( !hasScrolled ) {
        pageHeader.setAttribute('style','background-color: #000');
    }
    if ( hasScrolled ) {
        pageHeader.setAttribute('style','background-color: hsla(0, 0%, 0%, 0.850)');
    }
}, 100);

/* - Events - */

// // toggle variable to 'true' when the user has started scrolling
let hasScrolled = false;
window.onscroll = () => hasScrolled = true;

// Scroll to section on link click

// // sets click listener for each item in navBar
// // prevents default jump; implements scroll instead
for (let i=0; i<navItems.length; i++){
    navItems[i].addEventListener('click', function (event) {
        event.preventDefault();
        navSections[i].scrollIntoView(true, {behavior: 'smooth', block: 'top', inline: 'nearest'});
    });
}