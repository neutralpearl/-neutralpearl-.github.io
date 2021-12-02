import { validateLang } from './langValidator';
import { fetchSentiments } from './sentimentFetcher';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted; now handling... :::");

    // :::: NOT WORKING :::::
    // GET API Key value stored on server
    const retrieveKey = async () => {
        const response = await fetch('/get-key');
        console.log(response);
        return response;
    }

    // save res
    const API_KEY = JSON.stringify(retrieveKey().key);
    // console.log(API_KEY);

    // debugging — provide API Key directly instead of running GET from server
    // const API_KEY = '<API-KEY>';

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    // use Language Identification API to make sure text is in English
    const isValidated = await validateLang(formText,API_KEY);

    if (isValidated) {
        // retrieve Sentimental Analysis data from API
        const request = await fetchSentiments(formText,API_KEY);
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