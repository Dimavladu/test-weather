import {API_KEY, GET_WEATHER_CITY, WEATHER_CALL} from '../config'

import Coordinates from '../types/Coordinates'
import City from '../types/City'

export const getGeolocation = async (cityName: string) =>{
  const url: any = new URL(GET_WEATHER_CITY)
  const params: any = new URLSearchParams({
    q: cityName,
    appid: API_KEY
  })
  url.search = params

  const cityNameData = await fetch(url).then(r => r.json())
  const coordinates: Coordinates = {
    lat: cityNameData[0].lat,
    lon: cityNameData[0].lon
  }
  return coordinates
} 

export const getInfo = async(coordinates: Coordinates) =>{
  const url : any = new URL(WEATHER_CALL)
  const params: any = new URLSearchParams({
    lat: coordinates.lat,
    lon: coordinates.lon,
    utils: 'metric', //WTF don't working
    appid: API_KEY
  })
  url.search = params

  const cityInfoData = await fetch(url).then(r => r.json())
  const cityInfo:City = {
    name: cityInfoData.name,
    country: cityInfoData.sys.country,
    temp: cityInfoData.main.temp,
    fells_like: cityInfoData.main.feels_like,
    main: cityInfoData.weather[0].main,
    description: cityInfoData.weather[0].description,
    speed: cityInfoData.wind.speed,
    pressure: cityInfoData.main.pressure,
    humidity: cityInfoData.main.humidity,
    dew_point: cityInfoData.main.temp_min,
    visibility: cityInfoData.visibility
  }
  return cityInfo
}