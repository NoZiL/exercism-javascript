const earthYearsToPlanetYears = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export function age(planet = "earth", ageInSeconds = 0) {
  return round(ageInPlanetYears(planet, ageInSeconds), 2);
}

function round(value, decimal) {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

function ageInEarthYears(ageInSeconds = 0) {
  return ageInSeconds / 60 / 60 / 24 / 365.25;
}

function ageInPlanetYears(planet = "earth", ageInSeconds = 0) {
  return ageInEarthYears(ageInSeconds) / earthYearsToPlanetYears[planet];
}
