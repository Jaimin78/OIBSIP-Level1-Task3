//hide "Enter Number" message on input box click
const hide = () => {
    let msg = document.getElementById('msg');
    msg.style.display = "none";
}


//Calculating Temprature
const checkinp = () => {
    let value = Number(document.getElementById('degree').value);
    let msg = document.getElementById('msg');
    let type = document.getElementById('type').value;
    let result = document.getElementById('result');

    //if value is in Alphabet, it will show a message
    if(isNaN(value)){
        msg.style.display = "block";
    }else{
        type == 'Celsius' ? result.value = `${(value * 1.8) + 32}°F`: null
        type == 'Fahrenheit' ? result.value = `${Math.floor((value - 32) / 1.8)}°C`: null
    }
}