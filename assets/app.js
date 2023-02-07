setInterval(() => {
    var goal = new Date("Feb 10, 2024 00:00:00").getTime();
    var currentDate = new Date().getTime();
    var result = goal - currentDate;

    var days = Math.floor(result / (1000 * 60 * 60 * 24));
    var hours = Math.floor(result / (1000 * 60 * 60));
    var minutes = Math.floor(result / (1000 * 60));
    var seconds = Math.floor(result / 1000);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector(".container__beaches-countdown-date").innerText =
        days;
    document.querySelector(".container__beaches-countdown-hours").innerText =
        hours;
    document.querySelector(".container__beaches-countdown-minutes").innerText =
        minutes;
    document.querySelector(".container__beaches-countdown-seconds").innerText =
        seconds;
}, 1000);
