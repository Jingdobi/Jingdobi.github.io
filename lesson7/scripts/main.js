// weather summary

let f, t, s;
t = 40;
s = 3;

if(t <= 50 && s >= 3) {
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 *  t * Math.pow(s, 0.16);
    console.log(f)
    document.querySelector('#windChill').innerHTML = f.toFixed(0) + '&deg;';
} else {
    f = 'N/A';
    document.querySelector('#windChill').innerHTML = f;
}

document.querySelector('#current-temp').innerHTML = `${t}&deg;`//'50&deg;';
document.querySelector('#wind-speed').innerHTML = s + 'mph'  //'10mph';


// Pancake
const currentDate = new Date();
const aside = document.querySelector('aside');

if(currentDate.getDay() === 5) {
    aside.style.display = 'block';
} else {
    aside.style.display = 'none';
}

// Font Loader
WebFont.load({
    google: {
      families: [
         'Fira Sans Condensed'
      ]
    }
});