fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
    .then(result => {
            return result.json();
        }
    )

    .then(prophetList => {
            let prophets = prophetList.prophets;

            prophets.forEach(
                prophet => {
                    let article = document.createElement('article');

                    let h1 = document.createElement('h1');
                    h1.textContent = `${prophet.name} ${prophet.lastname}`;

                    let dateOfBirth = document.createElement('span');
                    dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;

                    let placeOfBirth = document.createElement('p');
                    placeOfBirth.textContent - `Place of Birth ${prophet.birthplace}`

                    let image = document.createElement('img');
                    image.setAttribute('src', prophet.imageurl);
                    image.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);


                    article.appendChild(h1);
                    article.appendChild(dateOfBirth);
                    article.appendChild(placeOfBirth);
                    article.appendChild(image);

                    document.getElementsByTagName('section')[0].appendChild(article);
                }
            )
        }
    );