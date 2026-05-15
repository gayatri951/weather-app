// LOGIN FUNCTION

function login(){

const email =
document.getElementById(
"email").value;

const password =
document.getElementById(
"password").value;


// SIMPLE LOGIN

if(email && password){

// Hide login page

document.getElementById(
"login-page").style.display =
"none";


// Show weather page

document.getElementById(
"weather-page").style.display =
"block";

}

else{

alert("Enter Email & Password");

}

}



// LOGOUT FUNCTION

function logout(){

document.getElementById(
"weather-page").style.display =
"none";

document.getElementById(
"login-page").style.display =
"block";

}



// WEATHER FUNCTION

async function getWeather(){

const city =
document.getElementById(
"city").value;


const apiKey =
"a8f2c43d47d5c8884c1c271309a1e1ed";


const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


const response =
await fetch(url);


const data =
await response.json();


document.getElementById(
"weather-data").innerHTML = `

<h2>${data.name}</h2>

<h1>${data.main.temp}°C</h1>

<p>${data.weather[0].main}</p>

<p>Humidity:
${data.main.humidity}%</p>

<p>Wind Speed:
${data.wind.speed} km/h</p>

`;

}