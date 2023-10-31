setInterval(function () {
  let manchesterElement = document.querySelector("#manchester");
  let manchesterDateElement = manchesterElement.querySelector(".date");
  let manchesterTimeElement = manchesterElement.querySelector(".time");
  let manchesterTime = moment().tz("Europe/London");

  manchesterDateElement.innerHTML = manchesterTime.format("MMMM Do YYYY");
  manchesterTimeElement.innerHTML = manchesterTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}, 1000);
