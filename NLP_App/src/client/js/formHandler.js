import { postForm } from "./dataPoster";
import { validateLang } from './langValidator';

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted :::");

    const endpoint = 'https://api.meaningcloud.com/sentiment-2.1';
    const MeaningCloud_API_Key = '979efb0428313b854a9125ee2da216c7';
    

    // check what text was put into the form field
    let formText = document.getElementById('input-text').value;

    // not working, not necessary
    // postForm('/text-input',formText);

    const isValidated = await validateLang(formText);

    //debugging 
    console.log(`isValidated = ${isValidated}`);

    if (isValidated) {
        const request = await fetch(`${endpoint}?lang=en&txt=${formText}&key=${MeaningCloud_API_Key}`);
        try {
            // Transform into JSON
            const response = await request.json()
            .then(response => {
                document.getElementById('results-title').innerHTML= `Sentiments Detected:`;

                document.getElementById('agreement').innerHTML = `<strong>Agreement:</strong> ${response.agreement.toLowerCase()}`;
                const agreementEmoji = (response.agreement.toLowerCase() === 'agreement' ? '&#128077;' : '&#128078;');
                document.getElementById('agreement-emoji').innerHTML = agreementEmoji;
                

                document.getElementById('subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${response.subjectivity.toLowerCase()}`;
                const subjectivityEmoji = (response.subjectivity.toLowerCase() === 'objective' ? '&#129488;' : '&#129300;');
                document.getElementById('subjectivity-emoji').innerHTML = subjectivityEmoji;

                document.getElementById('confidence').innerHTML = `<strong>Confidence:</strong> ${response.confidence}%`;
                const confidenceEmoji = (response.confidence >= 70 ? '&#128526;' : '&#129320;');
                document.getElementById('confidence-emoji').innerHTML = confidenceEmoji;

                document.getElementById('irony').innerHTML = `<strong>Irony:</strong> ${response.irony.toLowerCase()}`;
                const ironyEmoji = (response.irony.toLowerCase() === 'ironic' ? '&#128521;' : '&#128528;');
                document.getElementById('irony-emoji').innerHTML = ironyEmoji;


                document.getElementById('sentiments').style.visibility = 'visible';
                document.getElementById('results').style.visibility = 'visible';
            })
            .then( () => {
                document.getElementById('sentiments').classList.add('animate__animated', 'animate__fadeInDown');
            })
        } catch(error) {
            console.log(error);
        }
    } else {

    }
}

export { handleSubmit }