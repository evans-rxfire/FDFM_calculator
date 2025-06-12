const rfmTable = {
  "10-29": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 7, 45: 8, 50: 8, 55: 8, 60: 9, 65: 9, 70: 10, 75: 11, 80: 12, 85: 12, 90: 13, 95: 13, 100: 14 },
  "30-49": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 7, 45: 7, 50: 7, 55: 8, 60: 9, 65: 9, 70: 10, 75: 10, 80: 11, 85: 12, 90: 13, 95: 13, 100: 13 },
  "50-69": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 9, 70: 9, 75: 10, 80: 11, 85: 12, 90: 12, 95: 12, 100: 13 },
  "70-89": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 5, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 13 },
  "90-109": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 4, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 13 },
  "110": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 4, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 12 }
};

function getRFM(temp, rh) {
  let tempBin;
  if (temp <= 29) tempBin = "10-29";
  else if (temp <= 49) tempBin = "30-49";
  else if (temp <= 69) tempBin = "50-69";
  else if (temp <= 89) tempBin = "70-89";
  else if (temp <= 109) tempBin = "90-109";
  else tempBin = "110";

  let rhBin = Math.round(rh / 5) * 5;
  rhBin = Math.max(0, Math.min(100, rhBin)); // Clamp between 0 and 100

  return rfmTable[tempBin][rhBin];
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const temp = parseFloat(document.getElementById("temp").value);
  const rh = parseFloat(document.getElementById("RH").value);

  if (isNaN(temp) || isNaN(rh)) {
    document.getElementById("output").textContent = "Please enter valid temperature and RH values.";
    return;
  }

  const rfm = getRFM(temp, rh);
  document.getElementById("output").textContent = `Reference Fuel Moisture: ${rfm}%`;
});