function factory(data, type) {
    if (type == 'photographers') {
        return photographerFactory(data);
    } else {
    }
}

function photographerFactory(data) {
    const { id, name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement( 'a' );
        link.setAttribute("href", "/");
        link.setAttribute("aria-label", name);
        const article = document.createElement( 'article' );
        const article2 = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const span = document.createElement( 'span' );
        span.textContent = price + "€/jour";

        article.appendChild(img);
        article.appendChild(h2);
        link.appendChild(article);
        article2.appendChild(link);
        article2.appendChild(h3);
        article2.appendChild(p);
        article2.appendChild(span);
        return (article2);
    }
    return { name, picture, getUserCardDOM }
}