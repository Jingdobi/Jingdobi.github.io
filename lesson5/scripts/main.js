// weather summary

document.querySelector('#current-temp').innerHTML = '50&deg;';
document.querySelector('#wind-speed').innerHTML = '10mph';
document.querySelector('#humidity').innerHTML = '10%';

// Pancake
const currentDate = new Date();
const aside = document.querySelector('aside');

if(currentDate.getDay() === 5) {
    aside.style.display = 'block';
} else {
    aside.style.display = 'none';
}