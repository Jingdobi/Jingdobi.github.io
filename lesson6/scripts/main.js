








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