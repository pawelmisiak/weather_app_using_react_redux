//comes from new library that handles promises
import axios from 'axios';

const API_KEY = '42339cc4b1dd910d501d76332e4ea5dc';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// in case of any typos in string it is good practice
// to keep it in a variable

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  //this will return promise
  const request = axios.get(url);

  // here the console log will display payload with data that contains all
  // the information required for us.
  // console.log('Request', request );

  return {
    type: FETCH_WEATHER,
    paylod: request,
  };
}
