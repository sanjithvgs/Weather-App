const btnRef=document.querySelector('button');
const inputRef=document.querySelector('input');
const timeRef=document.querySelector('div.location_time>p');
const loctationRef=document.querySelector('div.location_tim span');
const iconRef=document.querySelector('div.weather_condition p');
const conditionRef=document.querySelector('div.weather_condition span');
const tempRef=document.getElementsByClassName('Temperature');


// Get location
btnRef.addEventListener('click', function(event){
    event.preventDefault();
    console.log(inputRef.value);
    fetchData();
})

function fetchData(){
    fetch("https://api.weatherapi.com/v1/current.json?key=ddbdb41c1725410f9bf54933233112&q=${belukurichi}&aqi=no")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(function(err){
            console.log(err);
        })
}