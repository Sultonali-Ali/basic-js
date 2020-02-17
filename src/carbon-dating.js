const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let inputNumber = parseFloat(sampleActivity);
  if (typeof(sampleActivity) !== "string" ||
      isNaN(inputNumber) ||
      sampleActivity === '' ||
      sampleActivity === null ||
      sampleActivity === undefined ||
      +sampleActivity > 15 ||
      +sampleActivity <= 0
  ) {
    return false;
  }

  let k = (0.693) / HALF_LIFE_PERIOD;

  let t = Math.log(MODERN_ACTIVITY / inputNumber) / (k);
  return +Math.ceil(t);

};
