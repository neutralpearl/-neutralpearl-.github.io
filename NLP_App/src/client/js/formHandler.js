import { validateLang } from './langValidator';
import { fetchSentiments } from './sentimentFetcher';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted; now handling... :::");

    // async GET call to retrieve API Key value stored on server
    const retrieveKey = async () => {
        const response = await fetch('https://localhost:8081/get-key');
        console.log(response);
        return response;
    }

    // save API response as local variable to pass into isValidated and sentimentFetcher
    const API_KEY = JSON.stringify(retrieveKey().key);
    console.log(API_KEY);

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    // use Language Identification API to make sure text is in English
    // const isValidated = await Client.validateLang(formText,API_KEY);
    const isValidated = await validateLang(formText,API_KEY);
    
    if (isValidated) {
        try {
            // retrieve Sentiment Analysis data from API
            const request = await fetchSentiments(formText,API_KEY);
            // const request = await Client.fetchSentiments(formText,API_KEY);

            // Transform into JSON
            const response = await request.json()
            .then(response => {
                // retrieve data from API & populate DOM content
                configSentiments(response);
                // Client.configSentiments(response);
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
    } else {
        throw new Error('No English text to evaluate');
    }
}

export { handleSubmit }