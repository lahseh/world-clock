setInterval(function () {
  let manchesterElement = document.querySelector("#manchester");
  if (manchesterElement) {
    let manchesterDateElement = manchesterElement.querySelector(".date");
    let manchesterTimeElement = manchesterElement.querySelector(".time");
    let manchesterTime = moment().tz("Europe/London");

    manchesterDateElement.innerHTML = manchesterTime.format("MMMM Do YYYY");
    manchesterTimeElement.innerHTML = manchesterTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

setInterval(function () {
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "my-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
