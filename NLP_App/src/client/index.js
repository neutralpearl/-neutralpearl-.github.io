import './styles/resets.scss';
import './styles/app.scss'; 

const process = {
    env: {NODE_ENV :'production'}
};

// import { postForm } from './js/dataPoster';
// import { validateLang } from './js/langValidator';
import { handleSubmit } from './js/formHandler';

// DEBUGGING -- remove later
// const event= {};
// document.getElementById('input-text').value = 'A free platform for download vector icons in SVG, PNG, EPS, AI & PSD format. All of our icon packs are completely free for commercial & personal use under';
// needs to be triggered by form submission
// handleSubmit(event);

// Listen for form submission -- NOT WORKING
document.getElementById('form').addEventListener("submit", handleSubmit);



