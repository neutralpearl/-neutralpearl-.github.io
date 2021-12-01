import { handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/app.scss'; 

//debugging 
// const process = {
//     env: {NODE_ENV :'production'}
// };

// Listen for form submission -- NOT WORKING
document.getElementById('form').addEventListener("submit", handleSubmit);



