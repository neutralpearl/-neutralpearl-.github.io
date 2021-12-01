import { validateLang } from './langValidator';
import { configSentiments} from "./sentimentConfigurator";

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted :::");

    const endpoint = 'https://api.meaningcloud.com/sentiment-2.1';
    const MeaningCloud_API_Key = '979efb0428313b854a9125ee2da216c7';
    
    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    const isValidated = await validateLang(formText);

    //debugging 
    console.log(`isValidated = ${isValidated}`);

    if (isValidated) {
        const request = await fetch(`${endpoint}?lang=en&txt=${formText}&key=${MeaningCloud_API_Key}`);
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
                document.getElementById('results').style.visibility = 'visible';
            })
        } catch(error) {
            console.log(error);
        }
    } 
}

export { handleSubmit }