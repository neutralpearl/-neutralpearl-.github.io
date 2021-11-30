// documentation: https://learn.meaningcloud.com/developer/language-identification/4.0/doc/request

let endpoint = 'https://api.meaningcloud.com/lang-4.0/identification';

async function validateLang(inputText) {
    console.log("::: Running validateText :::", inputText);
    const request = await fetch('${endpoint}?txt=${inputText}&key=${MeaningCloud_API_Key}');
    try {
        const response = await request.json();
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export { validateLang }
