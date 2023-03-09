
let country1 = "Pakistan";
let country2 = "India";
let country3 = "China";

alert("Select any one country : Pakistan , India or China ");

let A = prompt("Enter your selected country : " ,"Pakistan" );
console.log(A);


if( A == country1 ) {

    let state1 = "Sindh";
    let state2 = "Punjab";

    alert("Please select any one of the following states : Sindh or Punjab ");

    let B = prompt("Enter your selected state : " , "Sindh ");
    console.log(B);

    if(B == state1) {
     
        let city1 = "Karachi";
        let city2 = "Kashmir";

         let E = prompt("Please select the correct city : Karachi or Kashmir");
         console.log(E);
  
         if(E == city1) {
            alert("Congratulations! correct answer")
         }
        else if(E == city2) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }

    }
    //state1 ended
    else if(B == state2) {
        
        let city3 = "Lahore";
        let city4 = "Kpk";

         let F = prompt("Please select the correct city : Lahore or Kpk");
         console.log(F);
  
         if(F == city3) {
            alert("Congratulations! correct answer")
         }
        else if(F == city4) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }
     //state2 ended   
    }
    else {
        alert("Please enter given state above! ");
    }

}

//Country1 ended

else if( A == country2 ) {
    
    let state3 = "Rajasthan";
    let state4 = "Bihar";

    alert("Please select any one of the following states : Rajasthan or Bihar ");

    let C = prompt("Enter your selected state : " , "Rajasthan");
    console.log(C);

    if(C == state3) {
         
        let city5 = "Jaipur";
        let city6 = "Orrisa";

         let G = prompt("Please select the correct city : Jaipur or Orrisa ");
         console.log(G);
  
         if(G == city5) {
            alert("Congratulations! correct answer")
         }
        else if(G == city6) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }
    //state3 ended
    }
    else if(C == state4) {
        
        let city7 = "Patna";
        let city8 = "Ajmer";

         let H = prompt("Please select the correct city : Patna or Ajmer ");
         console.log(H);
  
         if(H == city7) {
            alert("Congratulations! correct answer")
         }
        else if(H == city8) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }

    }
    //state4 ended
    else {
        alert("Please enter given state above! ");
    }

}

//Country2 ended

else if( A ==  country3 ) {
  
    let state5 = "Yunnan";
    let state6 = "Tibet";

    alert("Please select any one of the following states : Yunnan or Tibet ");

    let D = prompt("Enter your selected state : " , "Yunnan");
    console.log(D);

    if(D == state5) {
        
        let city9 = "Jinghong";
        let city10 = "Shigatse";

         let I = prompt("Please select the correct city : Jinghong or Shigatse ");
         console.log(I);
  
         if(I == city9) {
            alert("Congratulations! correct answer")
         }
        else if(I == city10) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }

    }
    //state5 ended
    else if(D == state6) {
       
        let city11 = "Lahasa";
        let city12 = "Yuxi";

         let J = prompt("Please select the correct city : Lahasa or Yuxi ");
         console.log(J);
  
         if(J == city11) {
            alert("Congratulations! correct answer")
         }
        else if(J == city12) {
            alert("Bad luck! wrong answer")
         }
        else{
            alert("Something went wrong!")
        }

    }
    //state6 ended
    else {
        alert("Please enter given state above! ");
    }

}

//Country3 ended

else{
    alert(" Please select atleast one country given above! ");
}