const currentDate = new Date();
console.log(currentDate);

let currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML = currentYear;
