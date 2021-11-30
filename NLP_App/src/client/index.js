import './styles/resets.scss';
import './styles/app.scss'; 

const process = {
    env: {NODE_ENV :'production'}
};

const MeaningCloud_API_Key = process.env.API_KEY;

import { postForm } from './js/dataPoster';
import { validateLang } from './js/langValidator';
import { handleSubmit } from './js/formHandler';

// Listen for form submission
document.getElementById('form').onsubmit = handleSubmit(event);



