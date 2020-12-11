var a =prompt()
var opr =prompt()
var b =prompt()
function calculation  ( a ,opr ,b ){
if (opr === "+"){
  return  a + b
 
}else if(opr === "-"){

return a - b


} else if(opr === "*"){

        return a * b

        
        
        }


else if(opr === "/"){

    return a  / b
    
    }
   
        // else if((opr === "%")){

        //     return num1 % num2
            
            
            // }
            else{
                return "Incorrect operator"
            }
}

var result = calculation (a , "+" ,b)

var result = calculation (a, "-" ,b)
var result = calculation (a , "*" ,b)

var result = calculation (a , "/" ,b)


console.log(result);

document.write(result);

calculation() ;






// percantage

// function calculatePer(total , obtained){


// let percentage = obtained / total * 100 ;
// return percentage;


// }



// let total = +prompt("enter total number: ")
// let obtained = +prompt("enter obtained number: ")

// let result = calculatePer(total , obtained)

// document.write(result); 



