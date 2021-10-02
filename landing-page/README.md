# Dynamic Landing Page

Project completed for the Udacity Front End Web Dev course.


## Table of contents

- [Project Criteria](#project-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Footer](#footer)

---

## Project Criteria

The [project rubric](https://review.udacity.com/#!/rubrics/2658/view) requires all of the following:

- All features are usable across modern desktop, tablet, and phone browsers
- Styling has been added for active states
- There are at least 4 sections that have been added to the page
- Navigation is built dynamically as an unordered list
- It should be clear which section is being viewed while scrolling through the page 
- When clicking an item from the navigation menu, the link should scroll to the appropriate section
- Comments are present and effectively explain longer code procedures 
- Code is formatted with consistent, logical, and easy-to-read formatting 
- The ReadMe file should...have some basic information, eg. project description, usage, dependencies, and use correct the markdown syntax

## Installation

To clone locally, use these commands:

```git init```

```git clone https://github.com/neutralpearl/landing-page.git``` 

## Usage

To view this repo as website, go to https://neutralpearl.github.io/landing-page/index.html

## Development

This project is built upon this batch of [starter files](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page).

*These required features have been implemented through JavaScript functions & event listeners:*
- Sections are dynamically added to the navigation bar once DOM Content is fully loaded
- Upon scrolling, the section in the viewport is toggled to "active" styling
- Clicking on the nav bar links initiates a smooth scroll of that section into the viewport

*Non-required features that have been added include:*
- The nav bar styling indicates which section is currently in the viewport
- The sticky header (containing the nav bar) changes styling once the user has scrolled past the main hero section; this modified styling varies based on screen width
- A gallery of thumbnails is dynamically added to the corresponding section once DOM Content is fully loaded; this gallery only displays when its section is active

## License & Attributions

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)

*This README is adapted from the template provided in [Awesome README by Navendu Pottekat](https://github.com/navendu-pottekkat/awesome-readme)*

[(Back to top)](#table-of-contents)
