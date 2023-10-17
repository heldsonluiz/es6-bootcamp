export class WeatherData {
  constructor(cityName, cityCountry, description) {
    this.cityName = `${cityName}, ${cityCountry}`;
    this.description = description
    this.temperature = ''
  }
}

export const WeatherProxyHandler = {
  get: function(target, property) {
    return Reflect.get(target, property)
  },
  set: function(target, property, value) {
    const newValue = (value * 1.8 + 32).toFixed(2) + ' °F'
    return Reflect.set(target, property, newValue)
  }
}