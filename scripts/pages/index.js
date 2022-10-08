    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        var dataJson = await fetch("./data/photographers.json");
        var data = await dataJson.json();
        var photographers = data.photographers;
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = factory(photographer, 'photographers');
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    