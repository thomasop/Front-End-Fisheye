// Obtention des photographes
async function getPhotographers() {
    try {
        var dataJson = await fetch("./data/photographers.json");
        var data = await dataJson.json();
        var photographers = data.photographers;
        return ({
            photographers: [...photographers]})
    } catch {
        console.log("error");
    }
    
}

// Affichage des différents photographes
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = factory(photographer, 'photographers');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// Récupère les datas des photographes
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();