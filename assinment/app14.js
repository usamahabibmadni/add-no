var dob = new Date( prompt("Enter your date of birth"))

var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime()
var diff = todaymili - dobmili;
var accuage = Math.floor(diff/(1000*60*60*24*30*12))
document.write(accuage);








