
let numbers = [];
var sum = 0;
let userInput = 0;
let  avrg = 0;
for(i = 0; i< 10; i++){
     userInput =  +prompt ('enter no 1') 

    sum = sum + userInput

    numbers.push(userInput)

}

 
avrg = sum / 10

document.write(sum + "<br>")
document.write(avrg)

document.write("you entered:" + numbers + "<br>")



// var sum = 0;
// for(let i = 0; i  < 10 ; i++){
//  sum = sum + numbers[i]
// }

//  let no2 = +prompt ('enter no 2')
//  let no3 = +prompt ('enter no 3')
//  let no4 = +prompt ('enter no 4')
//  let no5 = +prompt ('enter no 5')
//  let no6 = +prompt ('enter no 6')
//  let no7 = +prompt ('enter no 7')
