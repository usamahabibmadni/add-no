function usam(){
    let temp = document.getElementById("temp").Value
    temp = parseFloat(temp)
    if (temp >=80 && temp <=100 ) {
        document.getElementById("Result").innerHTML = "<h1> A+/h1>"
    }
    else if(temp >=40 && temp <= 55 ){
        document.getElementById("Result").innerHTML = "<h1>  Carry Fridge </h1>"
    }
    else if(temp >=15 && temp <=20 ){
        document.getElementById("Result").innerHTML = "<h1> carry  jacket</h1>"
    }
    else {
        document.getElementById("Result").innerHTML = "<h1></h1>"
    }
}
