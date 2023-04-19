function setClock() {
  setInterval(function () {
    const now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("clockTime").innerHTML = time;
  }, 1000);
}

function changeMode() {
  if (document.getElementById("mode").checked) {
    document.body.style.background = "#fff";
    document.body.style.color = "#121212";
  } else {
    document.body.style.background = "#121212";
    document.body.style.color = "#fff";
  }
}

function setTimer() {
  var timer = {
    min: document.getElementById("min"),
    sec: document.getElementById("sec"),
    miliseconds: sec.value * 1000 + min.value * 60000,
  };

  interval = setInterval(function () {
    timer.miliseconds = timeControl(timer.miliseconds);

    sec.value = Math.floor((timer.miliseconds / 1000) % 60);
    min.value = Math.floor((timer.miliseconds / 1000 / 60) % 60);

    var cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function () {
      clearInterval(interval);
      (min.value = 0), (sec.value = 0);
    });

    if (timer.miliseconds <= 0) {
      clearInterval(interval);
      (min.value = 0), (sec.value = 0);
    }
  }, 1000);
}

function timeControl(miliseconds) {
  timecontrol = document.getElementById("timeControl");

  if (timecontrol.value == "stopwatch") {
    return (miliseconds += 1000);
  } else {
    return (miliseconds -= 1000);
  }
}
