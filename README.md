# Fine Dead Fuel Moisture (FDFM) Calculator

A web-based tool for calculating Fine Dead Fuel Moisture using the Fosberg model. Built to assist prescribed fire practitioners in estimating fuel moisture based on local weather, topography, and site conditions.

## Live Demo

[View the App](https://evansrxfire.com/fdfm-calculator) 
*(Optional: Insert a screenshot image here)*

---

## Features

- Calculates **reference FDFM** from time and relative humidity
- Applies **adjustment factors** based on:
  - Month of the year
  - Slope and aspect
  - Shading
  - Time of day
  - Position on slope (upper, middle, lower)
- **Seasonal logic** with different adjustment tables for:
  - Feb-Apr & Aug-Oct
  - May-July
  - Nov-Jan
- Also calculates **Probability of Ignition** based on the calculated FDFM

---

## How to Use

### Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/evans-rxfire/fdfm-calculator.git

2. Open index.html in your web browswer. No build tools or dependencies required.

---

## Tech Stack

 - HTML5, CSS3, JavaScript
 - Tailwind CSS for styling
 - Designed for modern browsers


---

## Background

This calculator uses the Fosberg model for estimating fine dead fuel moisture and adapts adjustments from published guidance specific to seasonal and geographic variation. It is intended as a decision support tool for field use during prescribed fire operations.

## Roadmap

- [x] Basic calculation form
- [x] Adjustment table logic based on month
- [x] Calculate Probability of Ignition (PIG)
- [ ] Responsive mobile interface
- [ ] Option to save/export multiple records
- [ ] Firebase integration for multi-user version (future)

## Contributing

Pull requests and feedback are welcome. If you'd like to contribute a feature or report a bug, please open an issue first to discuss it.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Fosberg, M. A. (1971). *Climatological Aids to Fuel Moisture Estimation*.
- Adjustment tables adapted from Federal fire management guidance, specifically the tables found at https://www.nwcg.gov/publications/pms437/fuel-moisture/dead-fuel-moisture-content and https://gacc.nifc.gov/swcc/predictive/outlooks/fire_behavior/reference_tables/documents/pi.htm.

