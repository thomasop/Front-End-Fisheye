function like() {
    const btnLike = document.querySelectorAll(".like");
    btnLike.forEach((like) => {
        like.addEventListener('click', (l) => {
            const beforeLike = l.path[2].childNodes[0].nodeValue;
            var currentLike = l.path[2].childNodes[0].nodeValue;
            const x = l.x;
            const y = l.y;
            if (parseInt(currentLike) == parseInt(currentLike) + 1) {
                console.log("Déja liker");
            } else {
                l.path[2].childNodes[0].textContent = parseInt(currentLike) + 1;
            }
        });
    });
}