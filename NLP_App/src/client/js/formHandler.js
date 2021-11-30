import { postForm } from "./dataPoster";

const endpoint = 'https://api.meaningcloud.com/sentiment-2.1'

async function handleSubmit(event) {
    event.preventDefault();
    console.log("::: Form submitted :::");

    // check what text was put into the form field
    let formText = document.getElementById('inputText').value;

    postForm('/text-input',formText);

    const isValidated = validateLang(formText);
    if (isValidated) {
        const request = await fetch(`${endpoint}?lang=en&txt=${formText}&key={MeaningCloud_API_Key}`);
        try {
            // Transform into JSON
            const response = await request.json()
            .then(response => {
                document.getElementById('agreement').innerHTML = response.agreement;
                document.getElementById('subjectivity').innerHTML = response.subjectivity;
                document.getElementById('confidence').innerHTML = response.confidence;
                document.getElementById('irony').innerHTML = response.irony;
            })
        } catch(error) {
            console.log(error);
        }
    } else {
        console.log('ERROR: MindRdr can only analyze English texts at this time.');
    }
}

export { handleSubmit }