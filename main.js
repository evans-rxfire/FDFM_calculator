const rfmTable = {
  "10-29": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 7, 45: 8, 50: 8, 55: 8, 60: 9, 65: 9, 70: 10, 75: 11, 80: 12, 85: 12, 90: 13, 95: 13, 100: 14 },
  "30-49": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 7, 45: 7, 50: 7, 55: 8, 60: 9, 65: 9, 70: 10, 75: 10, 80: 11, 85: 12, 90: 13, 95: 13, 100: 13 },
  "50-69": { 0: 1, 5: 2, 10: 2, 15: 3, 20: 4, 25: 5, 30: 5, 35: 6, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 9, 70: 9, 75: 10, 80: 11, 85: 12, 90: 12, 95: 12, 100: 13 },
  "70-89": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 5, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 13 },
  "90-109": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 4, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 13 },
  "110": { 0: 1, 5: 1, 10: 2, 15: 2, 20: 3, 25: 4, 30: 4, 35: 5, 40: 6, 45: 7, 50: 7, 55: 8, 60: 8, 65: 8, 70: 9, 75: 10, 80: 10, 85: 11, 90: 12, 95: 12, 100: 12 }
};

const fdfmAdjustmentTableMJJ = {
  unshaded: {
    N: {
      "0-30": {
        "0800-0959": { B: 2, L: 3, A: 4 },
        "1000-1159": { B: 1, L: 1, A: 1 },
        "1200-1359": { B: 0, L: 0, A: 1 },
        "1400-1559": { B: 0, L: 0, A: 1 },
        "1600-1759": { B: 1, L: 1, A: 2 },
        "1800-1959": { B: 2, L: 3, A: 4 }
      },
      "31+": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 2, L: 2, A: 2 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 2, L: 3, A: 4 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      }
    },
    E: {
      "0-30": {
        "0800-0959": { B: 2, L: 3, A: 4 },
        "1000-1159": { B: 1, L: 1, A: 1 },
        "1200-1359": { B: 0, L: 0, A: 1 },
        "1400-1559": { B: 0, L: 1, A: 2 },
        "1600-1759": { B: 1, L: 2, A: 3 },
        "1800-1959": { B: 2, L: 3, A: 4 }
      },
      "31+": {
        "0800-0959": { B: 2, L: 3, A: 4 },
        "1000-1159": { B: 1, L: 1, A: 1 },
        "1200-1359": { B: 0, L: 0, A: 1 },
        "1400-1559": { B: 1, L: 2, A: 3 },
        "1600-1759": { B: 2, L: 3, A: 4 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      }
    },
    S: {
      "0-30": {
        "0800-0959": { B: 2, L: 3, A: 4 },
        "1000-1159": { B: 1, L: 1, A: 1 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 2, L: 2, A: 3 },
        "1800-1959": { B: 2, L: 3, A: 4 }
      },
      "31+": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 2, L: 2, A: 2 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 2, L: 2, A: 3 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      }
    },
    W: {
      "0-30": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 2, L: 3, A: 4 },
        "1200-1359": { B: 1, L: 2, A: 2 },
        "1400-1559": { B: 1, L: 2, A: 3 },
        "1600-1759": { B: 2, L: 3, A: 4 },
        "1800-1959": { B: 2, L: 3, A: 4 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 5 },
        "1200-1359": { B: 2, L: 3, A: 3 },
        "1400-1559": { B: 2, L: 3, A: 4 },
        "1600-1759": { B: 3, L: 4, A: 5 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    }
  },
  shaded: {
    N: 5,
    E: 5,
    S: 5,
    W: 5
  }
};

const fdfmAdjustmentTableFMA_ASO = {
      unshaded: {
    N: {
      "0-30": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 1, L: 2, A: 3 },
        "1200-1359": { B: 1, L: 1, A: 2 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 1, L: 2, A: 3 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      },
      "31+": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 3, L: 3, A: 4 },
        "1200-1359": { B: 2, L: 3, A: 4 },
        "1400-1559": { B: 2, L: 3, A: 4 },
        "1600-1759": { B: 3, L: 3, A: 4 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      }
    },
    E: {
      "0-30": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 1, L: 2, A: 3 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 1, L: 2, A: 4 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      },
      "31+": {
        "0800-0959": { B: 3, L: 3, A: 4 },
        "1000-1159": { B: 1, L: 1, A: 1 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 2, A: 3 },
        "1600-1759": { B: 3, L: 4, A: 5 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    },
    S: {
      "0-30": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 1, L: 2, A: 2 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 1 },
        "1600-1759": { B: 1, L: 2, A: 3 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      },
      "31+": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 1, L: 2, A: 2 },
        "1200-1359": { B: 0, L: 1, A: 1 },
        "1400-1559": { B: 0, L: 1, A: 1 },
        "1600-1759": { B: 1, L: 2, A: 2 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      }
    },
    W: {
      "0-30": {
        "0800-0959": { B: 3, L: 4, A: 5 },
        "1000-1159": { B: 1, L: 2, A: 3 },
        "1200-1359": { B: 1, L: 1, A: 1 },
        "1400-1559": { B: 1, L: 1, A: 1 },
        "1600-1759": { B: 1, L: 2, A: 3 },
        "1800-1959": { B: 3, L: 4, A: 5 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 5 },
        "1200-1359": { B: 1, L: 2, A: 3 },
        "1400-1559": { B: 1, L: 1, A: 1 },
        "1600-1759": { B: 1, L: 1, A: 1 },
        "1800-1959": { B: 3, L: 3, A: 4 }
      }
    }
  },
  shaded: { //needs update
    N: 5,
    E: 5,
    S: 5,
    W: 5
  }
};

const fdfmAdjustmentTableNDJ = {
      unshaded: {
    N: {
      "0-30": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 5 },
        "1200-1359": { B: 2, L: 3, A: 4 },
        "1400-1559": { B: 2, L: 3, A: 4 },
        "1600-1759": { B: 3, L: 4, A: 5 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 4, L: 5, A: 6 },
        "1200-1359": { B: 4, L: 5, A: 6 },
        "1400-1559": { B: 4, L: 5, A: 6 },
        "1600-1759": { B: 4, L: 5, A: 6 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    },
    E: {
      "0-30": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 4 },
        "1200-1359": { B: 2, L: 3, A: 3 },
        "1400-1559": { B: 2, L: 3, A: 3 },
        "1600-1759": { B: 3, L: 4, A: 5 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 2, L: 3, A: 4 },
        "1200-1359": { B: 2, L: 2, A: 3 },
        "1400-1559": { B: 3, L: 4, A: 4 },
        "1600-1759": { B: 4, L: 5, A: 6 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    },
    S: {
      "0-30": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 5 },
        "1200-1359": { B: 2, L: 3, A: 3 },
        "1400-1559": { B: 2, L: 2, A: 3 },
        "1600-1759": { B: 3, L: 4, A: 4 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 2, L: 3, A: 3 },
        "1200-1359": { B: 1, L: 1, A: 2 },
        "1400-1559": { B: 1, L: 1, A: 2 },
        "1600-1759": { B: 2, L: 3, A: 3 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    },
    W: {
      "0-30": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 3, L: 4, A: 5 },
        "1200-1359": { B: 2, L: 3, A: 3 },
        "1400-1559": { B: 2, L: 3, A: 3 },
        "1600-1759": { B: 3, L: 4, A: 4 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      },
      "31+": {
        "0800-0959": { B: 4, L: 5, A: 6 },
        "1000-1159": { B: 4, L: 5, A: 6 },
        "1200-1359": { B: 3, L: 4, A: 4 },
        "1400-1559": { B: 2, L: 2, A: 3 },
        "1600-1759": { B: 2, L: 3, A: 4 },
        "1800-1959": { B: 4, L: 5, A: 6 }
      }
    }
  },
  shaded: { //needs update
    N: 5,
    E: 5,
    S: 5,
    W: 5
  }
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

function getTimeBlock(timeStr) {
  const hour = parseInt(timeStr.split(":")[0]);
  if (hour >= 8 && hour < 10) return "0800-0959";
  if (hour >= 10 && hour < 12) return "1000-1159";
  if (hour >= 12 && hour < 14) return "1200-1359";
  if (hour >= 14 && hour < 16) return "1400-1559";
  if (hour >= 16 && hour < 18) return "1600-1759";
  if (hour >= 18 && hour < 20) return "1800-1959";
  return null; // fallback or out-of-range
}

function getFdfmAdjustmentFactor({ month, time, shading, aspect, slope, location }) {
  const monthNum = new Date(month).getMonth(); // 0 = Jan, 6 = July
  let table;

  // Choose the correct table
  if ([4, 5, 6].includes(monthNum)) { // May–July
    table = fdfmAdjustmentTableMJJ;
  } else if ([1, 2, 3, 7, 8, 9].includes(monthNum)) { // Feb–Apr & Aug–Oct
    table = fdfmAdjustmentTableFMA_ASO;
  } else { // Nov–Jan
    table = fdfmAdjustmentTableNDJ;
  }

  // Shading logic
  if (shading === "shaded") {
    return table.shaded[aspect];
  }

  // Convert slope to matching key
  const slopeKey = slope === "less-than-30" ? "0-30" : "31+";

  // Get time block
  const timeBlock = getTimeBlock(time);
  if (!timeBlock) return null;

  // Lookup value
  try {
    return table.unshaded[aspect][slopeKey][timeBlock][location];
  } catch (e) {
    return null; // in case any key is missing
  }
}

/*function getFdfmAdjustmentFactor({ month, time, shading, aspect, slope, location }) {
  const monthNum = new Date(month).getMonth(); // 0 = Jan, 6 = July
  let table;

  // Select correct table
  if ([4, 5, 6].includes(monthNum)) {
    console.log("Using MJJ table");
    table = fdfmAdjustmentTableMJJ;
  } else if ([1, 2, 3, 7, 8, 9].includes(monthNum)) {
    console.log("Using FMA_ASO table");
    table = fdfmAdjustmentTableFMA_ASO;
  } else {
    console.log("Using NDJ table");
    table = fdfmAdjustmentTableNDJ;
  }

  // Shaded vs. unshaded
  if (shading === "shaded") {
    console.log(`Accessing shaded table for aspect: ${aspect}`);
    const value = table.shaded[aspect];
    console.log("Shaded value:", value);
    return value;
  }

  const timeBlock = getTimeBlock(time);
  const keys = { aspect, slope, timeBlock, location };

  console.log("Unshaded keys:", keys);

  try {
    const unshadedAspect = table.unshaded[aspect];
console.log("Unshaded Aspect:", unshadedAspect);

const slopeBlock = unshadedAspect?.[slope];
console.log("Slope Block:", slopeBlock);

const timeSlot = slopeBlock?.[timeBlock];
console.log("Time Block:", timeSlot);

const adjustment = timeSlot?.[location];
console.log("Final Adjustment:", adjustment);

return adjustment;

  } catch (error) {
    console.error("Missing key during lookup", { aspect, slope, timeBlock, location });
    return null;
  }
}*/


function calculateFinalFdfm(referenceFdfm, adjustmentFactor) {
  return referenceFdfm + adjustmentFactor;
}



document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const temp = parseFloat(document.getElementById("temp").value);
  const rh = parseFloat(document.getElementById("RH").value);
  const month = document.getElementById("month").value;
  const time = document.getElementById("time").value;
  const slope = document.getElementById("slope").value === "less-than-30" ? "0-30" : "31+";
  const aspect = document.getElementById("aspect").value.charAt(0).toUpperCase();
  const shading = document.getElementById("shading").value === "shaded" ? "shaded" : "unshaded";
  const locationMap = {
    below: "B",
    level: "L",
    above: "A"
    };
    const locationValue = document.getElementById("location").value;
    const location = locationMap[locationValue];


  const output = document.getElementById("output");

  if (isNaN(temp) || isNaN(rh)) {
    output.textContent = "Please enter valid temperature and RH values.";
    return;
  }

  const referenceFdfm = getRFM(temp, rh); // Your existing function

  const adjustmentFactor = getFdfmAdjustmentFactor({
    month,
    time,
    shading,
    aspect,
    slope,
    location,
  });

console.log(adjustmentFactor);

  if (adjustmentFactor === null || adjustmentFactor === undefined) {
    output.textContent = "Adjustment factor could not be determined. Please check your inputs.";
    return;
  }

  const finalFdfm = calculateFinalFdfm(referenceFdfm, adjustmentFactor);

  output.textContent = `Reference Fuel Moisture: ${referenceFdfm}%\nAdjustment: +${adjustmentFactor}\nFinal FDFM: ${finalFdfm}%`;
});
