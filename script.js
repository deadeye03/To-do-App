setInterval(() => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let mnth = a.getMonth();
    let year = a.getFullYear();

    let date = document.getElementById('date');

    if (d < 10 && mnth < 9) {
        date.innerHTML = `0${d}    /    0${mnth + 1}  / ${year} vaild for only 24Hours these task`;
    }
    else if (d < 10 && mnth > 10) {
        date.innerHTML = `0${d}    /    ${mnth + 1}  / ${year} vaild for only 24Hours these task`

    } else if (d > 9 && mnth < 9) {
        date.innerHTML = `${d}    /    0${mnth + 1}  / ${year} vaild for only 24Hours these task`
    }
    else {
        date.innerHTML = `${d}    /    ${mnth + 1}  / ${year} vaild for only 24Hours these task`;
    }



    let time = document.getElementById('time')
    // time.innerHTML = `${ h }  : ${ m }  : ${ s } `
    // location.reload();
}, 1000);

let day = document.getElementById('today')
let today = new Date().getDay()
// today=today+1;
// console.log(today)
let message;
switch (today) {
    case 0:
        message = "Sunday 🖖";
        break;

    case 1:
        message = "Monday 💪😀";
        break;
    case 2:
        message = "Tuesday 😜";
        break;
    case 3:
        message = "Wednesday 😌☕️";
        break;
    case 4:
        message = "Thursday 🤗";
        break;
    case 5:
        message = "Friday 🍻";
        break;
    case 6:
        message = "Saturday 😴";
        break;
    default:
        break;
}
var randomWordArray = Array(
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
);

var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
day.textContent = randomWord + message;
// console.log(message);