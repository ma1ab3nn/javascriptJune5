
function myFunction () {
    console.log("Hello");
    document.write("document write")
 
}
let x= myFunction();


function combineNames (firstName, lastName) {
    console.log(`${firstName} ${lastName} `);

    let fullName = firstName + " " + lastName;
    console.log(`${fullName}`);

    return (fullName);

 
}
combineNames("Mala", "Benn");



function temperature (theTemperature, ownHat, ownCoat) {
    if (theTemperature <= 0) {
        return(console.log("Stay inside"));
    }
    
    else if ( theTemperature < 30 && ownHat == true && ownCoat== true ) {
        return(console.log("Put your coat and hat on"));
    }

    else if ( theTemperature < 50 && ownCoat == true) {
        return(console.log("Put your coat on"));
    }
    
    else {
        return(console.log("Pants and vest is fine"));
    };

}

temperature (29, true, true);


function fullName(fname, lname){
    console.log('function is running');
    if(!fname || !lname) return;
    console.log(`${fname} ${lname}`);
  }
  fullName();

