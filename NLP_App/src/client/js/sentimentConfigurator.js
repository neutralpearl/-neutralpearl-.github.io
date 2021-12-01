const configSentiments = response => {
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
}

export { configSentiments }