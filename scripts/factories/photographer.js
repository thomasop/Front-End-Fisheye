function factory(data, type) {
    if (type == 'photographers') {
        return photographersFactory(data);
    } else if (type == 'photographer') {
        return photographerFactory(data);
    } else {
        return mediaFactory(data);
    }
}

function photographersFactory(data) {
    const { id, name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement( 'a' );
        link.setAttribute("href", "/photographer.html?id=" + id);
        link.setAttribute("aria-label", name);
        const article = document.createElement( 'article' );
        const article2 = document.createElement( 'article' );
        article2.setAttribute("title", "Photographer " + name);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "")
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

function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const photographersSection = document.querySelector(".photograph-header");
        const article = document.createElement( 'article' );
        article.setAttribute("class", "photograph-header__article");
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        h1.setAttribute("class", "photograph-header__h1");
        const h2 = document.createElement( 'h2' );
        h2.textContent = city + ", " + country;
        h2.setAttribute("class", "photograph-header__h2");
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        p.setAttribute("class", "photograph-header__p");
        article.appendChild(h1);
        article.appendChild(h2);
        article.appendChild(p);
        photographersSection.appendChild(article);

        const articleContact = document.createElement( 'article' );
        articleContact.setAttribute("class", "articleContact");
        const contact = document.createElement( 'button' );
        contact.setAttribute("class", "contact_button");
        contact.setAttribute("onclick", "displayModal()");
        contact.textContent = "Contactez-moi";
        articleContact.appendChild(contact);
        photographersSection.appendChild(articleContact)

        const articleImg = document.createElement( 'article' );
        articleImg.setAttribute("class", "articleImg");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("class", "photograph-header__img");
        img.setAttribute("alt", name);
        articleImg.appendChild(img);
        photographersSection.appendChild(articleImg)

        const priceD = document.createElement( 'div' );
        const like = document.createElement( 'div' );
        const span = document.createElement( 'span' );
        span.setAttribute("id", "photograph__span")
        span.textContent = "297 081";
        const imgLike = document.createElement( 'img' );
        imgLike.setAttribute("id", "photograph__like");
        imgLike.setAttribute("src", "assets/icons/Vector.png");
        imgLike.setAttribute("alt", "like icone")
        like.appendChild(span);
        like.appendChild(imgLike);
        /*
        const priceDay = document.createElement( 'h2' );
        priceDay.textContent = price + "€/jour"
        priceDay.setAttribute("class", "photograph__priceDay");
        priceD.setAttribute("class", "photograph__price");
        priceD.appendChild(like);
        priceD.appendChild(priceDay);
        photographersSection.appendChild(priceD);
        */
        const form = document.forms[0];
        form.insertAdjacentHTML('afterbegin', '<h3>' + name + '</h3>')
        return (photographersSection);
    }
    return { name, getUserCardDOM }
}

function mediaFactory(data) {
    if (data.image) {
        const picture = `assets/media/${data.image}`;
        
        function getUserCardDOM() {
            const mediaSection = document.querySelector(".galerie");
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.setAttribute("class", "galerie__img");
            img.setAttribute("alt", data.title);
            //link.appendChild(img);
            const div = document.createElement( 'div' );
            const divFlex = document.createElement( 'div' );
            divFlex.setAttribute("class", "galerie__div--flex")
            const p = document.createElement( 'h2' );
            p.textContent = data.title;
            p.setAttribute("class", "galerie__p");
            const span = document.createElement( 'span' );
            span.textContent = data.likes;
            span.setAttribute("class", "galerie__span");
            divFlex.appendChild(p);
            divFlex.appendChild(span);
            const button = document.createElement('button');
            button.setAttribute("class", "like");
            const i = document.createElement( 'img' );
            i.setAttribute("src", "assets/icons/Vector.png");
            i.setAttribute("alt", "like icone")
            i.setAttribute("class", "galerie__icone");
            button.appendChild(i)
            span.appendChild(button);

            div.appendChild(img);
            div.appendChild(divFlex);
            mediaSection.appendChild(div);
        }
    } else {
        const videoData = `assets/media/${data.video}`;
        function getUserCardDOM() {
            const mediaSection = document.querySelector(".galerie");
            const video = document.createElement( 'video' );
            video.setAttribute("class", "galerie__video");
            video.setAttribute("controls", true);
            const source = document.createElement( 'source' );
            source.setAttribute("src", videoData);
            source.setAttribute("type", "video/mp4");
            video.appendChild(source);
            const div = document.createElement( 'div' );
            const divFlex = document.createElement( 'div' );
            divFlex.setAttribute("class", "galerie__div--flex")
            const p = document.createElement( 'h2' );
            p.textContent = data.title;
            p.setAttribute("class", "galerie__p");
            const span = document.createElement( 'span' );
            span.textContent = data.likes;
            span.setAttribute("class", "galerie__span");
            const button = document.createElement('button');
            button.setAttribute("class", "like");
            const i = document.createElement( 'img' );
            i.setAttribute("src", "assets/icons/Vector.png");
            i.setAttribute("class", "galerie__icone");
            i.setAttribute("alt", "like icone")
            button.appendChild(i);
            span.appendChild(button);

            divFlex.appendChild(p);
            divFlex.appendChild(span);

            div.appendChild(video);
            div.appendChild(divFlex);
            mediaSection.appendChild(div);
        }
    }
    
    return { getUserCardDOM }
}