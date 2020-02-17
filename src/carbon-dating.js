const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(+sampleActivity)) {
    return false;
  }
  let k = (+sampleActivity / MODERN_ACTIVITY) / HALF_LIFE_PERIOD;

  let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
  return Math.round(t);

};
