// Ecoute d'un évennement sur le like
function like(medias) {
    const btnLike = document.querySelectorAll(".galerie__icone");
    btnLike.forEach((like) => {
        like.addEventListener('click', (e) => {
            addLike(e, medias);
        });
        like.addEventListener('keydown', (e) => {
            if(e.key == 'Enter') {
                addLike(e, medias);
            }
        })
    });
}

// Ajout d'un like
function addLike(e, medias) {
    var currentLike = e.path[1].childNodes[0].nodeValue;
    var oldLike = medias.filter(function(likeMedia) {
        return likeMedia.likes === parseInt(currentLike);
    })
    oldLike.forEach((likeArray) => {
        if (likeArray.id == e.path[1].id) {
            if (likeArray.length == 0) {
                console.log("Déja liker");
            } else {
                e.path[1].childNodes[0].textContent = parseInt(currentLike) + 1;
            }
        }
    })
}