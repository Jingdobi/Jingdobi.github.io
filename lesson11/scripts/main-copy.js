
// weather summary
let cityId = document.getElementById('cityId').innerHTML
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=7eca0dba938adc792625ae77e4e3e85c&units=imperial`

fetch(apiURL)
.then(response => response.json())
.then(
    jsObject => {
        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let f = 0;

        if(t <= 50 && s >= 3) {
            f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 *  t * Math.pow(s, 0.16);
            document.querySelector('#windChill').innerHTML = f.toFixed(0) + '&deg;';
        } else {
            f = 'N/A';
            document.querySelector('#windChill').innerHTML = f;
        }

        document.querySelector('#current-temp').innerHTML = `${t}&deg;`//'50&deg;';
        document.querySelector('#wind-speed').innerHTML = s.toFixed() + 'mph'  //'10mph

        document.querySelector('#weatherDesc').textContent = 
            jsObject.weather[0].main;
            console.log(jsObject.weather[0].main)

        let imageUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`

            document.querySelector('#weatherImage')
                .setAttribute('src', imageUrl)

    }

    
);


const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=7eca0dba938adc792625ae77e4e3e85c&units=imperial`

fetch(forecastApiUrl)
.then(response => response.json())
.then(
    jsObject => {
        let counter = 1;
        jsObject.list.forEach(
            forecast => {
                if (forecast.dt_txt.includes('18:00')) {
                    let forecastDate = new Date(forecast.dt_txt.replace(' ', 'T'));
                    let dayOfWeek = daysOfWeek[forecastDate.getDay()];

                    document.getElementById(`day${counter}`)
                        .textContent = dayOfWeek;

                    document.getElementById(`temp${counter}`)
                        .textContent = forecast.main.temp;

                    counter++;
                }
            }
        );
    }
)
// weather summary





// Pancake
const currentDate = new Date();
const aside = document.querySelector('aside');

if(currentDate.getDay() === 5) {
    aside.style.display = 'block';
} else {
    aside.style.display = 'none';
}