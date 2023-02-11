export const getWindStringByIndex = [
  "Below 0.3m/s (calm)",
  "0.3-3.4m/s (light)",
  "3.4-8.0m/s (moderate)",
  "8.0-10.8m/s (fresh)",
  "10.8-17.2m/s (strong)",
  "17.2-24.5m/s (gale)",
  "24.5-32.6m/s (storm)",
  "32.6-36.7m/s (hurricane)",
  "36.7-41.4m/s (hurricane+)",
  "41.4-46.2m/s (hurricane+)",
  "46.2-50.9m/s (hurricane+)",
  "50.9-55.9m/s (hurricane+)",
  "Over 55.9m/s (hurricane+)",
];

export const mapIconByResponse = {
  clear: "day",
  pcloudy: "cloudy-day-1",
  mcloudy: "cloudy-day-2",
  cloudy: "cloudy-day-3",
  rain: "rainy-6",
  lightrain: "rainy-1",
  snow: "snowy-1",
  ts: "thunder",
  tsrain: "tsrain",
};

export const mapWeatherByResponse = {
  clear: "Clear: Total cloud cover less than 20%",
  pcloudy: "PCloudy: Total cloud cover between 20%-60%",
  mcloudy: "MCloudy: Total cloud cover between 60%-80%",
  cloudy: "Cloudy: Total cloud cover over over 80%",
  lightrain:
    "LightRain: Precipitation rate less than 4mm/hr with total cloud cover more than 80%",
  rain: "Rainy: Precipitation rate over 4mm/hr",
  snow: "Snowy: Precipitation rate over 4mm/hr",
  ts: "Thunder: Lifted Index less than -5 with precipitation rate below 4mm/hr",
  tsrain:
    "ThunderRain: Lifted Index less than -5 with precipitation rate over 4mm/hr",
};

export enum WeatherIconResponse { // ts: alternatíva enum helyett!
  clear,
  pcloudy,
  cloudy,
  rain,
  snow,
  ts,
  tsrain,
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export const initLocation: Coordinates = {
  longitude: 0,
  latitude: 0,
};

export const initGeolocationPositionError: GeolocationPositionError = {
  code: 0,
  message: "",
  PERMISSION_DENIED: 0,
  POSITION_UNAVAILABLE: 0,
  TIMEOUT: 0,
};
