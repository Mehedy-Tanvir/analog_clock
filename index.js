const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function clockUpdate() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const hourDeg = ((currentHour / 12) * 360);
    hour.style.transform = `rotate(${hourDeg}deg)`;
    const minuteDeg = ((currentMinute / 60) * 360);
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    const secondDeg = ((currentSecond / 60) * 360);
    second.style.transform = `rotate(${secondDeg}deg)`;


}
setInterval(clockUpdate, 1000);