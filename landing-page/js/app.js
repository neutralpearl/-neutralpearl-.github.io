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
// // returns the id of the section which contains each div in .landing__container class
// const getSectionId = (div) => {
//     return div.parentElement.id;
// }

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
        navItem.className = 'nav-link'
        navBar.appendChild(navItem);
    }
}
//href="#${sectionId}"

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
    for (let i=0; i<rectSections.length; i++){
        if (rectSections[i].top >= 0 && rectSections[i].height >= 300){
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
    // only execute the function when scrolling has been detected
    if ( hasScrolled ) {
        // reset boolean so scroll-check will remain accurate
        hasScrolled = false;

        // add "active" classes to section & its nav item when that section is in the viewport
        // NOT WORKING FOR NARROW WINDOWS - is it supposed to?

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
        } else if (inViewport() === 'Section 5'){
            for (let i=0; i<sectionContainers.length; i++){
                if (i === 4) {
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

// this doesn't work, probably because it can't add a click event to that element
// navItems[0].addEventListener('click', scrollToSection(i), false);


    // event.preventDefault();
 //more concise draft — doesn't work yet
        // for (let h=1; h<(sectionContainers.length+1); h++){
        //     while (inViewport() === `Section ${h}`){
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


        //try setting this up as a while loop?
        // seems to crash the page because it keeps running as long as it's true
        // for (let h=0; h<sectionContainers.length; h++){
        //     while (inViewport() === h) {
        //         for (let i=0; i<sectionContainers.length; i++){
        //             if (i = h) {
        //                 sectionContainers[i].classList.add('active-section');
        //                 navItems[i].classList.add('active');
        //             } else {
        //                 // doesn't work because it's removing classes from the same sections it just added to ?
        //                 sectionContainers[i].classList.remove('active-section');
        //                 navItems[i].classList.remove('active');
        //             }
        //         }
        //     }
        // }


// needs to be adapted 
// Get the modal
const modalGallery = document.getElementById("modal");

// Get the button that opens the modal
const btn = document.getElementById("open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}