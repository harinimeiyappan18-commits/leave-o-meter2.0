function checkLeave() {
  let rainfall = document.getElementById("rainfall").value;
  let city = document.getElementById("city").value;
  let result = document.getElementById("result");

  if (rainfall === "") {
    result.innerHTML = "L-Ji says: Enter rainfall value 🌧️";
    return;
  }

  rainfall = parseFloat(rainfall);

  if (rainfall < 3) {
    result.innerHTML = `L-Ji says: No leave in ${city}. Pack your bag 😅`;
  } 
  else if (rainfall >= 3 && rainfall <= 7) {
    result.innerHTML = `L-Ji says: Possible leave in ${city}. Wait for notice 👀`;
  } 
  else {
    result.innerHTML = `L-Ji says: High chance of leave in ${city}! Stay safe ☔`;
  }
}
