setInterval(() => {
  showTime();
}, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  } else {
    am_pm = "AM";
  }
  if (hour == 0) {
    hour = 12;
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let hourVar = document.getElementsByClassName("hour")[0];
  let minVar = document.getElementsByClassName("min")[0];
  let secVar = document.getElementsByClassName("sec")[0];

  hourVar.innerHTML = hour;
  minVar.innerHTML = min;
  secVar.innerHTML = sec;
  document.getElementsByClassName("amPm")[0].innerHTML = am_pm;
}
