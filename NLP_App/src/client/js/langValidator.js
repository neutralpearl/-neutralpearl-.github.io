async function validateLang(inputText,key) {
    console.log(`::: Running validateText ::: "${inputText}" `);

    let endpoint = 'https://api.meaningcloud.com/lang-4.0/identification';
    // const MeaningCloud_API_Key = process.env.API_KEY;
     const MeaningCloud_API_Key = key;

    const formdata = new FormData();
    formdata.append("key", `${MeaningCloud_API_Key}`);
    formdata.append("txt", `${inputText}`);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

    const request = await fetch(`${endpoint}`, requestOptions);
    try {
        const response = await request.json();
        const lang = response.language_list[0].name;
        const errorMessage = document.getElementById('error-message');

        if(lang === 'English'){
            errorMessage.style.display = 'none'; 
            console.log(response);
            return response;
        } else {
            errorMessage.innerHTML = 'Sorry! MindRdr cannot analyze non-English text at this time.';
            errorMessage.style.display = 'block';          

            //show error message in lieu of response
            document.getElementById('sentiments').style.visibility = 'visible';
            document.getElementById('results').style.display = 'none';

            throw new Error('Sorry! MindRdr cannot analyze non-English text at this time.');
        }
        
    } catch(error) {
        console.log(error);
        return false;
    }
}

export { validateLang }
