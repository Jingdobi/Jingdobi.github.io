fetch("json/temples.json")
    .then(result => {
        return result.json();
    })
    .then(templeList => {
        let temples = templeList.temples;


        temples.forEach(
            temple => {

                let article = document.createElement('article');
                article.setAttribute('class', "temple-article")

                let h2 = document.createElement('h2');
                h2.setAttribute('class', "temple-header");
                h2.textContent = `${temple.templeName}`;
                article.appendChild(h2);

                let image = document.createElement('img');
                image.textContent = `${temple.imgURL}`;
                image.setAttribute('class', "temple-pics")
                image.setAttribute('src', temple.imgURL)
                image.setAttribute('alt', `The ${temple.templeName}`)
                article.appendChild(image);

                let streetLine = document.createElement('p');
                streetLine.textContent = `${temple.streetLine} `;
                streetLine.setAttribute('class', "addresses");
                article.appendChild(streetLine);


                let cityState = document.createElement('p');
                cityState.textContent = ` ${temple.city}, ${temple.state}`;
                cityState.setAttribute('class', "addresses");
                article.appendChild(cityState)

                let country = document.createElement('p');
                country.textContent = `  ${temple.country}, ${temple.zip}`;
                country.setAttribute('class', "addresses");
                article.appendChild(country);

                let breakpoint0 = document.createElement('h3')
                breakpoint0.textContent = 'Temple Services available'
                article.appendChild(breakpoint0)

                let counter = 0
                temple.services.forEach(
                    service => {
                        services = document.createElement('li');
                        services.textContent = `${temple.services[counter]}`;
                        services.setAttribute('class', "temple-services")
                        article.appendChild(services);
                        counter++
                    })

                let br = document.createElement('br')
                article.appendChild(br)

                let breakpoint1 = document.createElement('h3')
                breakpoint1.textContent = 'Temple history'
                article.appendChild(breakpoint1)

                counter = 0
                temple.history.forEach(
                    holder => {
                        dayOf = document.createElement('li');
                        dayOf.textContent = `${temple.history[counter].milestone}: ${temple.history[counter].date}`
                        dayOf.setAttribute('class', 'history')

                        article.appendChild(dayOf)

                        counter++
                    }
                )

                let breakpoint2 = document.createElement('h3')
                breakpoint2.textContent = 'Available times for ordinances'
                article.appendChild(breakpoint2)


                let initiatory = document.createElement('li')
                initiatory.textContent = `Initiatories: ${temple.schedule.ordinances.initiatory}`;
                initiatory.setAttribute('class', 'ordinances')
                article.appendChild(initiatory)

                let endowment = document.createElement('li')
                endowment.textContent = `Endowments: ${temple.schedule.ordinances.endowment}`;
                endowment.setAttribute('class', 'ordinances')
                article.appendChild(endowment)

                let sealing = document.createElement('li')
                sealing.textContent = `Sealings: ${temple.schedule.ordinances.sealings}`;
                sealing.setAttribute('class', 'ordinances')
                article.appendChild(sealing)

                let breakpoint3 = document.createElement('h3')
                breakpoint3.textContent = 'Temple Closures'
                article.appendChild(breakpoint3)

                counter = 0
                temple.closures.forEach(
                    closing => {
                        closing = document.createElement('li');
                        closing.textContent = temple.closures[counter];
                        closing.setAttribute('class', 'closures')
                        article.appendChild(closing);

                        counter++
                    }
                )

                let breakpoint4 = document.createElement('h3')
                breakpoint4.textContent = 'Contact'
                article.appendChild(breakpoint4)

                let telephone = document.createElement('p');
                telephone.textContent = `${temple.telephone}`
                article.appendChild(telephone);

                let email = document.createElement('p');
                email.textContent = `${temple.email}`;
                article.appendChild(email);

                let breakpoint5 = document.createElement('h3')
                breakpoint5.textContent = 'Current Weather'
                article.appendChild(breakpoint5)

                    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${temple.id}&appid=7eca0dba938adc792625ae77e4e3e85c&units=imperial`)
                    .then(result => {
                        return result.json();
                    })
                    .then( weatherList => {
                        let weather = weatherList.weather;
                        
                        let imageSrc = `http://openweathermap.org/img/w/${weatherList.weather[0].icon}.png`
                        let icon = document.createElement('img')
                        icon.setAttribute('src', imageSrc)
                        icon.setAttribute('class', 'icon')
                        icon.setAttribute('alt', weather[0].description)

                        let description = document.createElement('li');
                        description.textContent = weather[0].description;
                        description.setAttribute('class', 'weather');

                        console.log(weather[0].description)
                        let temp = document.createElement('li');
                        temp.textContent = `Current Temperature: ${weatherList.main.temp} °F`;
                        temp.setAttribute('class', 'weather');

                        let feelsLike = document.createElement('li');
                        feelsLike.textContent = `Feels like: ${weatherList.main.feels_like} °F`;
                        feelsLike.setAttribute('class', 'weather');

                        article.appendChild(icon);
                        article.appendChild(description);
                        article.appendChild(temp);
                        article.appendChild(feelsLike);
                    })
                document.getElementsByTagName('section')[1].appendChild(article);
            }
        )
    });