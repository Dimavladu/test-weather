interface City {
  name: string,
  country: string,
  temp: number,
  feels_like: number,
  main: string,
  description: string,
  speed: number,
  pressure: string,
  humidity: string,
  dew_point: number,
  visibility: number,
  id?: string | number,
  lon: string | number,
  lat: string | number,
}
export default City