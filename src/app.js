import * as ELEMENTS from './elements.js'
import {Http} from './http.js'
import {WeatherData, WeatherProxyHandler} from './weather-data.js'

// Paste your APIID from OpenWeatherMap here
const APPID = '...'

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather)

function searchWeather () {
  const cityName = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim()
  if (!cityName.length) return alert('Please enter a city name')

  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none'
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block'

  setTimeout(fetchData(cityName), 1000)
}

function fetchData (cityName) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APPID}`

  Http.fetchData(url)
    .then(response => {
      const weatherData = new WeatherData(cityName,response.sys.country,response.weather[0].description.toUpperCase())
      const weatherProxy = new Proxy(weatherData, WeatherProxyHandler)
      weatherProxy.temperature = response.main.temp

      updateWeather(weatherProxy)
    })
    .catch(error => {
      alert(error)
    })
}

function updateWeather(weatherData) {
  ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName
  ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description
  ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature

  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block'
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none'
}