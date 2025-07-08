const toggleBtn = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

const tempInput = document.getElementById("temp");
const rhInput = document.getElementById("RH");
const monthInput = document.getElementById("month");
const timeInput = document.getElementById("time");
const slopeInput = document.getElementById("slope");
const aspectInput = document.getElementById("aspect");
const shadingInput = document.getElementById("shading");
const locationInput = document.getElementById("location");

const refFDFM = document.getElementById("ref-fdfm");
const adjFDFM = document.getElementById("adj-fdfm");
const finalFDFM = document.getElementById("final-fdfm");
const pigOutput = document.getElementById("pig-output");

const locationMap = {
    below: "B",
    level: "L",
    above: "A",
};


let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBtn = document.getElementById("install-button");
    if (installBtn) installBtn.style.display = "block";
});


const installBtn = document.getElementById("install-button");

if (installBtn) {
    installBtn.addEventListener("click", async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Install prompt result: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = "none";
    });
}


function getFormData() {
    const temp = parseFloat(tempInput.value);
    const rh = parseFloat(rhInput.value);
    const month = monthInput.value;
    const time = timeInput.value;
    const slope = slopeInput.value === "less-than-30" ? "0-30" : "31+";
    const aspect = aspectInput.value.charAt(0).toUpperCase();
    const shading = shadingInput.value === "shaded" ? "shaded" : "unshaded";

    const location = locationMap[locationInput.value];

    return { temp, rh, month, time, slope, aspect, shading, location };
}


function validateFormData({ temp, rh, month, time, slope, aspect, shading, location }) {
    if (isNaN(temp)) {
        return { valid: false, message: "Temperature is required and must be a number." };
    }

    if (isNaN(rh)) {
        return { valid: false, message: "Relative Humidity is required and must be a number." };
    }

    if (rh < 0 || rh > 100) {
    return { valid: false, message: "Relative Humidity must be between 0 and 100." };
    }

    if (!month) {
        return { valid: false, message: "Month is required." };
    }

    if (!time) {
        return { valid: false, message: "Time is required." };
    }

    if (!slope) {
        return { valid: false, message: "Slope selection is required." };
    }

    if (!aspect) {
        return { valid: false, message: "Aspect is required." };
    }

    if (!shading) {
        return { valid: false, message: "Shading selection is required." };
    }

    if (!location) {
        return { valid: false, message: "Location selection is required." };
    }

    return { valid: true };
}


function getRFM(temp, rh) {
    let tempBin;
    if (temp <= 29) tempBin = "10-29";
    else if (temp <= 49) tempBin = "30-49";
    else if (temp <= 69) tempBin = "50-69";
    else if (temp <= 89) tempBin = "70-89";
    else if (temp <= 109) tempBin = "90-109";
    else tempBin = "110";

    let rhBin = Math.round(rh / 5) * 5;
    rhBin = Math.max(0, Math.min(100, rhBin));

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
    return null;
}

function isNightTime(timeStr) {
    const [hourStr, minuteStr] = timeStr.split(":");
    const hour = parseInt(hourStr, 10);

    return hour >= 20 || hour < 8;
}

function getFdfmAdjustmentFactor({
    month,
    time,
    shading,
    aspect,
    slope,
    location,
    }) {
    const monthNum = new Date(month).getMonth(); // Jan = 0
    let table;

    if ([4, 5, 6].includes(monthNum)) {
        table = fdfmAdjustmentTableMJJ;
    } else if ([1, 2, 3, 7, 8, 9].includes(monthNum)) {
        table = fdfmAdjustmentTableFMA_ASO;
    } else {
        table = fdfmAdjustmentTableNDJ;
    }

    const timeBlock = getTimeBlock(time);
    const isNight = isNightTime(time);

    if (!timeBlock && !isNight) return null;

    if (isNight) {
        try {
        return table.shaded[aspect]["0800-0959"][location];
        } catch (e) {
        return null;
        }
    }

    if (shading === "shaded") {
        try {
        return table.shaded[aspect][timeBlock][location];
        } catch (e) {
        return null;
        }
    }

    const slopeKey = slope === "less-than-30" ? "0-30" : "31+";

    try {
        return table.unshaded[aspect][slopeKey][timeBlock][location];
    } catch (e) {
        return null;
    }
}

function calculateFinalFdfm(referenceFdfm, adjustmentFactor) {
    return referenceFdfm + adjustmentFactor;
}

function getPig(temp, fdfm, shading) {
    const fm = Math.max(2, Math.min(17, Math.round(fdfm)));

    let tempRangeKey = null;

    for (const range in pigTable[shading]) {
        if (range.includes("-")) {
        const [min, max] = range.split("-").map(Number);
        if (temp >= min && temp <= max) {
            tempRangeKey = range;
            break;
        }
        } else {
        const min = parseInt(range);
        if (temp >= min) {
            tempRangeKey = range;
        }
        }
    }

    if (!tempRangeKey) return null;

    const pig = pigTable[shading][tempRangeKey][fm];
    return pig ?? null;
}


toggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');

    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = getFormData();

    const validation = validateFormData(formData);
    if (!validation.valid) {
    output.textContent = validation.message;
    return;
    }

    const { temp, rh, month, time, slope, aspect, shading, location } = formData;

    const referenceFdfm = getRFM(temp, rh);

    const adjustmentFactor = getFdfmAdjustmentFactor({
        month,
        time,
        shading,
        aspect,
        slope,
        location,
    });

    console.log(adjustmentFactor);

    if (adjustmentFactor == null) {
        output.textContent =
        "Adjustment factor could not be determined. Please check your inputs.";
        return;
    }

    const finalFdfm = calculateFinalFdfm(referenceFdfm, adjustmentFactor);

    const pig = getPig(temp, finalFdfm, shading);

    const pigDisplay = pig !== null ? `${pig}%` : "Unavailable";

    refFDFM.textContent = `Reference Fuel Moisture: ${referenceFdfm}%`;
    adjFDFM.textContent = `Adjustment +${adjustmentFactor}`;
    finalFDFM.textContent = `Final FDFM: ${finalFdfm}%`;

    pigOutput.textContent = `Probability of Ignition: ${pigDisplay}`;
});


window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
    }
});


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
        .register("./service-worker.js")
        .then((reg) => console.log("Service worker registered:", reg.scope))
        .catch((err) => console.error("Service worker registration failed:", err));
    });
}


window.addEventListener("appinstalled", () => {
    console.log("App installed!");
    const installBtn = document.getElementById("install-button");
    if (installBtn) installBtn.style.display = "none";
});