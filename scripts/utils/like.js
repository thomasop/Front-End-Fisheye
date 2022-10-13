function like(medias) {
    const btnLike = document.querySelectorAll(".like");
    btnLike.forEach((like) => {
        like.addEventListener('click', (l) => {
            var currentLike = l.path[2].childNodes[0].nodeValue;
            var oldLike = medias.filter(function(likeMedia) {
                return likeMedia.likes === parseInt(currentLike);
            })
            if (oldLike.length == 0) {
                console.log("Déja liker");
            } else {
                
                if (oldLike[0].likes == parseInt(currentLike) - 1) {
                    console.log("Déja liker");
                    l.path[2].childNodes[0].textContent = parseInt(currentLike) + 1;
                } else {
                    l.path[2].childNodes[0].textContent = parseInt(currentLike) + 1;
                }
            }
            
        });
    });
}