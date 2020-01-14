const currentDate = new Date();
console.log(currentDate);

let currentYear = currentDate.getFullYear();
console.log(currentYear);

let x = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("currentDate").innerHTML = x;
