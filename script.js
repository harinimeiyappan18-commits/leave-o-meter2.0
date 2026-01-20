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
  function checkLeave() {
  let rain = parseFloat(document.getElementById("rainfall").value);
  let city = document.getElementById("city").value;
  let inst = document.getElementById("institution").value;
  let month = document.getElementById("month").value;
  let result = document.getElementById("result");

  if (isNaN(rain)) {
    result.innerHTML = "L-Ji says: I need rainfall data to think 🤔";
    return;
  }

  let riskScore = 0;

  // Rainfall logic
  if (rain > 7) riskScore += 4;
  else if (rain >= 4) riskScore += 2;
  else riskScore += 0;

  // City flood sensitivity
  if (city === "Chennai" || city === "Mumbai") riskScore += 2;

  // Monsoon months
  if (["Oct","Nov","Dec","Jun","Jul"].includes(month)) {
    riskScore += 2;
  }

  // Institution logic
  if (inst === "School") riskScore += 1;

  // Decision
  let verdict = "";
  if (riskScore >= 7)
    verdict = "🟢 HIGH chance of leave. Stay home & stay safe ☔";
  else if (riskScore >= 4)
    verdict = "🟡 POSSIBLE leave. Await official notice 👀";
  else
    verdict = "🔴 Low chance of leave. Classes likely on 😅";

  result.innerHTML = `
    <strong>L-Ji Analysis 🧠</strong><br>
    City Risk: ${city}<br>
    Weather Severity Score: ${riskScore}/10<br><br>
    ${verdict}
  `;
}

}  
