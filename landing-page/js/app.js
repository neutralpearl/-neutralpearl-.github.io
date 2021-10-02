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
// image gallery div within each section
const sectionGalleries = document.querySelectorAll('.thumbnail-container');
// initialize boolean to track when user has started scrolling
let hasScrolled = false;


/* - Helper Functions - */

// returns the content between the h2 tags for divs in .landing__container class
const getSectionHeader = (div) => {
    return div.firstElementChild.textContent;
}

// returns the id for each section
const getSectionId = (div) => {
    return div.parentElement.id;
}

// returns array containing dimensions in viewport for each section
const getRectSections = () => {
    let array = [];
    for (let i=0; i<sectionContainers.length; i++){
        let rect = sectionContainers[i].getBoundingClientRect();
        array.push(rect);
    }
    return array;
}

// returns the index of the section currently in the viewport
const inViewport = () => {
    let rectSections = getRectSections();
    for (let index=0; index<rectSections.length; index++){
        // detects section in viewport on non-mobile devices (roughly)
        if (window.innerWidth > 601){
            if ((rectSections[index].top >= 0 && rectSections[index].height >= 300) || (rectSections[index].top <= 0 && rectSections[index].height > screen.height)){
                return index;
            }
        } else {
            // NOT WORKING YET!
            // different selection rules for small screens
            let screenHeight = window.innerHeight;
            if (window.scrollY > rectSections[index].y){
                return index;
            }
        }
    }
}

// populates gallery for each section with 5 thumbnails
const galleryBuilder = (index) => {
    // get id to match with image file names
    let imageLabel = getSectionId(navSections[index]);
    // for each image to be added...
    for (let i=0; i<5; i++){
        // create new thumbnail
        let thumbnail = document.createElement('img');
        // assign its class, data-id. & sourse
        thumbnail.className = 'gallery-thumbnail';
        thumbnail.setAttribute('data-id',`${imageLabel}${i+1}`);
        thumbnail.setAttribute('src',`media/${imageLabel}${i+1}.jpg`);
        // add thumbnail to container div
        sectionGalleries[index].appendChild(thumbnail);
    }
}

/* - Main Functions - */

// build the nav
const navBuilder = () => {
    // for each section to be added to navBar...
    for (let i=0; i<navSections.length; i++){
        // get the header & id to populate the li content
        let sectionHeader = getSectionHeader(navSections[i]);
        let sectionId = getSectionId(navSections[i]);
        // create new li element, assign its content & id
        let navItem = document.createElement('li');
        navItem.innerHTML = `<a data-id="${sectionId}" class="">${sectionHeader}</a>`;
        // append new li to navBar ul
        navBar.appendChild(navItem);
    }
}

// build galleries for all sections
const buildAllGalleries = () => {
    for (let i=0; i<sectionGalleries.length; i++){
        galleryBuilder(i);
    }
}

// add class 'active' to section & its nav item when near top of viewport

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


// change header & nav styling when user has scrolled below the main hero image
const pastHero = () => {
    let belowFold = sectionContainers[0];
    // for non-mobile displays
    if (window.innerWidth > 451){
        // when user has scrolled beneath main hero
        if (window.scrollY >= belowFold.getBoundingClientRect().bottom) {
            // darken header
            pageHeader.classList.add('opaque');
            // change class of nav links to change text color
            for (let i=0; i<navItems.length; i++){
                navItems[i].firstElementChild.classList.add('belowHero');
            }
        } else {
            // header nearly transparent
            pageHeader.classList.remove('opaque');
            // keep default nav link styling
            for (let i=0; i<navItems.length; i++){
                navItems[i].firstElementChild.classList.remove('belowHero');
            }
        }
    } else {
        // when first section reaches top of viewport on mobile
        if (window.scrollY >= belowFold.getBoundingClientRect().top){
            // hide header (including nav)
            pageHeader.setAttribute('style','visibility: hidden');
        } else {
            // show transparent header above fold
            pageHeader.setAttribute('style','visibility: visible');
            pageHeader.classList.remove('opaque');
            for (let i=0; i<navItems.length; i++){
                navItems[i].firstElementChild.classList.remove('belowHero');
            }
        }
    }
}

// scroll to section when corresponding nav item clicked
scrollToSection = (event) => {
    // when link elements are clicked
    if (event.target.nodeName === 'A'){
        // identify section corresponding to link
        let sectionId = event.target.getAttribute('data-id');
        let section = document.getElementById(sectionId);
        // initiate smooth scroll to that section
        section.scrollIntoView({behavior: "smooth", block: "end"});
    }
}

// // activate modal lightbox
// enlargeThumbnail = (event) => {
//     if(event.target.nodeName === 'IMG'){
//         console.log('clicked!');
//         let imageId = event.target.getAttribute('data-id');
//         let modalContainer = document.getElementById(imageId);
//         modalContainer.classList.remove('hidden');
//     }
// }


/* - Events - */

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', navBuilder, false);

// dynamically build nav once DOM content is loaded
document.addEventListener('DOMContentLoaded', buildAllGalleries, false);

// toggle boolean upon scroll
window.onscroll = () => hasScrolled = true;

// change header & nav styling when user scrolls below the fold
document.addEventListener('scroll', pastHero, false);

// scroll to section upon link click
navBar.addEventListener('click', (event) => {scrollToSection(event)}, false);

// // enlarge gallery images upon hovering over thumbnail
// for (let i=0; i<sectionGalleries.length; i++){
//     sectionGalleries[i].addEventListener('click', (event) => {enlargeThumbnail(event)}, false);
// };