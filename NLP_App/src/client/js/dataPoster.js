const postForm = async (url,data) => {

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };

    const response = await fetch(url, requestOptions)
    return await response.json();
}

export { postForm }