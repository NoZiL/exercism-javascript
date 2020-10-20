const mapPlanetYearsToEarthYear = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const ageInEarthYears = (ageInSeconds) => ageInSeconds / 60 / 60 / 24 / 365.25

const exactAgeInPlanetYears = (planet, ageInSeconds) => ageInEarthYears(ageInSeconds) / mapPlanetYearsToEarthYear[planet]

const roundDecimal = (val, digit) => Math.round(val * Math.pow(10, digit)) / Math.pow(10, digit)

export const age = (planet, ageInSeconds) => roundDecimal(exactAgeInPlanetYears(planet, ageInSeconds), 2)
