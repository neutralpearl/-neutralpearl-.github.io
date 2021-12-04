const chooseTheme = event => {

    const appBody = document.getElementsByTagName('body')[0];
    const urlBase=`url('src/client/media/')`;

    const themeChoice = event.target;
    console.log(`changing theme to ${themeChoice.id} . . . `);
    
    // images aren't getting 
    switch (themeChoice.id) {
        case 'mountain': 
            console.log(themeChoice.id);
            appBody.style.backgroundImage = `${urlBase}mountains.jpg')`; 
            break;
        case 'city': 
            console.log(themeChoice.id);
            appBody.style.backgroundImage = `${urlBase}skyline.png')`; 
            break;
        case 'oasis': 
            console.log(themeChoice.id);
            appBody.style.backgroundImage = `${urlBase}palms.jpg')`; 
            break;
        case 'ruins': 
            console.log(themeChoice.id);
            appBody.style.backgroundImage = `${urlBase}temples.jpg')`; 
            break;
        // default:
        //     appBody.style.backgroundImage = `${urlBase}mountains.jpg')`; 
    }
}

export { chooseTheme }

