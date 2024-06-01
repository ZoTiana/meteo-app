function searchCity(city) {
  let apiKey = "d73d01c748aatfb2o0bcd43d19416a3e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function refreshWeather(response) {
  console.log(response.data);
}
function searchUpdate(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  let currentTimeElement = document.querySelector("#current-time");
  currentTimeElement.innerHTML = formattedDate();
  searchCity(searchInput.value);
}

function formattedDate() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];
  let currentTime = `${day} ${hour}:${minute} `;
  return currentTime;
}
searchCity("Paris");
let form = document.querySelector("form");
let searchButton = document.querySelector("#submit-button");
form.addEventListener("submit", searchUpdate);
