const apiKey ='7c9f9a77b915386033fdd6453a61ffa8'
const button = () =>{
    const input = document.getElementById('button-input');
    const inputValue = input.value;
    input.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showTemp(data))
}

const showTemp = tempareture =>{
    console.log(tempareture)
    // const ces = (tempareture.main.temp - 32)* 5/9;
    const geyId = document.getElementById('showtemp');
    geyId.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${tempareture.name}</h1>
        <h1><span>${tempareture.main.temp}</span>&deg;C</h1>
        <h1>Weather Condition: ${tempareture.weather[0].main}</h1>
    `
    geyId.appendChild(div)
}