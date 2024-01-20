const convertToCelsius = function(fTemp) {
  // x °F ≘ (x − 32) × 5/9 °C
  let cTemp =  ((fTemp - 32) * (5 / 9));

  if (cTemp % 1 != 0) {
    cTemp = cTemp.toFixed(1);
  }

  return parseFloat(cTemp);

};

const convertToFahrenheit = function(cTemp) {
  // 	x °C ≘ (x × 9/5 + 32) °F
  let fTemp = ((cTemp * (9 / 5) + 32));

  if (fTemp % 1 != 0) {
    fTemp = fTemp.toFixed(1);
  }

  return parseFloat(fTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
