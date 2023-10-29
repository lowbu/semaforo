const trafficLightImage = document.getElementById('traffic-light-image');
const btnRed = document.getElementById('btnRed');
const btnYellow = document.getElementById('btnYellow');
const btnGreen = document.getElementById('btnGreen');
const btnOff = document.getElementById('btnOff');

btnRed.addEventListener('click', () => {
    trafficLightImage.src = 'Imagens/traffic_light_red.png';
});

btnYellow.addEventListener('click', () => {
    trafficLightImage.src = 'Imagens/traffic_light_yellow.png';
});

btnGreen.addEventListener('click', () => {
    trafficLightImage.src = 'Imagens/traffic_light_green.png';
});

btnOff.addEventListener('click', () => {
    trafficLightImage.src = 'Imagens/traffic_light.png';
});