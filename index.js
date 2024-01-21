const btnRef=document.querySelector('button');
const inputRef=document.querySelector('input');
const timeRef=document.querySelector('div.location_time>p');
const loctationRef=document.querySelector('div.location_tim span');
const iconRef=document.querySelector('div.weather_condition p');
const conditionRef=document.querySelector('div.weather_condition span');
const tempRef=document.getElementsByClassName('Temperature');

btnRef.addEventListener('click', function(event){
    console.log(timeRef.value);
    console.log(inputRef.value);
})
