let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let startDate = '09/01/2023  00:00:00';
let x = setInterval(function () {
    let now = new Date().getTime();
    let Countdown = new Date(startDate).getTime();
    let distance = Countdown - now;
  
    let d = Math.floor(Math.abs(distance) / (1000 * 60 * 60 * 24));
    let h = Math.floor((Math.abs(distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((Math.abs(distance) % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((Math.abs(distance) % (1000 * 60)) / 1000);

    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".newYear span").style.display = 'block';  
    }
}, 1000);