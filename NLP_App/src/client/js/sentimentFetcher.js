async function fetchSentiments(inputText) {
    const endpoint = 'https://api.meaningcloud.com/sentiment-2.1';
    const MeaningCloud_API_Key = process.env.API_KEY;
    // console.log(`API_KEY — fetchSentiments : ${MeaningCloud_API_Key}`);
    // const MeaningCloud_API_Key ='979efb0428313b854a9125ee2da216c7';

    const formdata = new FormData();
    formdata.append("key", `${MeaningCloud_API_Key}`);
    formdata.append("lang", "en");
    formdata.append("txt", `${inputText}`);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    
    try {
        const request = await fetch(`${endpoint}`, requestOptions);
        return request;
    } catch(error) {
        throw new Error('Error: Could not retrieve response from MeaningCloud Sentiment Analysis API');
    }
    
}

export { fetchSentiments }