
var array = [];
function addtolist(){
    var fname = document.getElementById("fname").value;
    var roll = document.getElementById("rNo").value;
    array.push({
      fname: fname,
      roll: roll
    });
    alert ("Ok, " + fname + " added in the class list with roll no. " + roll);

    for (var i = 0; i<array.length; i++){
      console.log(i, 'kk')
        document.write("</br>"+ fname + ":" + roll);
    }
}

  