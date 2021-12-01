import { validateLang } from './langValidator';
import { fetchSentiments } from './sentimentFetcher';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted :::");

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    // use Language Identification API to make sure text is in English
    const isValidated = await validateLang(formText);

    if (isValidated) {
        // retrieve Sentimental Analysis data from API
        const request = await fetchSentiments(formText);
        try {
            // Transform into JSON
            const response = await request.json()
            .then(response => {
                // retrieve data from API & populate DOM content
                configSentiments(response);
            })
            .then( () => {
                // display retrieved sentiment data in results div
                document.getElementById('sentiments').style.visibility = 'visible';
                
                // add animations
                document.getElementById('sentiments').classList.add = 'animate__animated animate__fadeInDown';
                const sentiments = document.getElementsByClassName('sentiment-grid');
                for (let i=0; i < sentiments.length; i++) {
                    sentiments[i].classList.add('animate__animated','animate__zoomIn','animate__slow');
                }

                // show div containing sentiments
                document.getElementById('results').style.display = 'grid';
                document.getElementById('results').style.visibility = 'visible';
            })
        } catch(error) {
            console.log(error);
        }
    } 
}

export { handleSubmit }