console.log("funciona?")
let firstname = "victoria";
let lastname = "artusi";
let fullname = firstname + " " + lastname;
let edad = 19;
let movies = ["boeing_history", "kissing_booth1" , "emily_in_paris" , "coming_to_america" , "kissing_booth2"];
let learningJs = false;
let career = "admin de empresas";
const university = "UdeSA";
let personalinfo = "";
console.log(firstname);
console.log(lastname);
console.log(fullname);
console.log(edad);
console.log(movies);
console.log(learningJs);
console.log(career);
console.log(university);
console.log(personalinfo);
learningJs= true;
career= "negocios_digitales";
//university= "UADE"//
console.log(learningJs);
console.log(career);
console.log(university);

// university = "UADE" indica error por que no se le puede reasignar un valor a la variable creada con const//
//console.log(university) indica "UdeSA" xq la variable esta creada con un const.//

movies.pop();
console.log(movies);

movies.push("teen beach movie" , "downfall");
console.log(movies);



