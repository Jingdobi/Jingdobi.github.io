const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday",
"Friday","Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


let today = new Date()
console.log(dayNames[today.getDate() % 7 + 2] + ', ' + today.getDate() + ' ' +
 monthNames[today.getMonth()] + ' ' + today.getFullYear())

document.getElementById("today").innerHTML = dayNames[today.getDate() % 7 + 2] + ', ' + today.getDate() + ' ' +
monthNames[today.getMonth()] + ' ' + today.getFullYear()


function toggleMenu(){
    document.querySelector(".navigation").classList.toggle("responsive")
}
