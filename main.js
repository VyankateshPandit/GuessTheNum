let x = Math.floor(Math.random() * 100) + 1;
var result = x;

    function add_number() {
var first_number = parseInt(document.getElementById("Text1").value);


if( first_number  == x){          
  document.getElementById("output").innerHTML = " <h2>  Number is : "+x+" Correct Guess :</h2>"

  }
  else if(first_number <= -1){
    document.getElementById("output").innerHTML = "<h2> Check Input it Looks NEGATIVE VALUE...! </h2>"
  
  }
else if( first_number < x){          
         document.getElementById("output").innerHTML = "<h2>Guess is too small:</h2>"


}
else if( first_number > x){          
 document.getElementById("output").innerHTML = " <h2> Guess is too Big:</h2>"


}

else{
 document.getElementById("output").innerHTML = "<h2> Check Input it Looks EMPTY...! </h2>"


}



}


key