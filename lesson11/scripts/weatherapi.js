const apiURL ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=7eca0dba938adc792625ae77e4e3e85c&units=imperial'

fetch(apiURL)
    .then(
        response => {
            return response.json();

        }
    )
    .then(
        jsObject => {
            console.log(jsObject);

            document.querySelector('#current-temp')
                .textContent = jsObject.main.temp;
            let image = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

                console.log(image)
            document.querySelector('#weather-icon')
                .setAttribute('src', image);

            let alt = jsObject.weather[0].description;

            document.querySelector('#weather-icon')
                .setAttribute('alt', alt); 

            //     optomized
            // let weatherIcon = document.querySelector('#weatherIcon')
            // weatherIcon.setAttribute('src', image);
            // weatherIcon.setAttribute('alt', alt);

        }
    );

    