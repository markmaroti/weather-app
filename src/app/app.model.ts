export const initLatitude = 22.212;
export const initLongitude = 41.111;

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
  humid: "humid",
  lightrain: "rainy-1",
  oshower: "oshower",
  ishower: "ishower",
  lightsnow: "snowy-2",
  rain: "rainy-6",
  snow: "snowy-1",
  rainsnow: "rainsnowy",
  ts: "thunder",
  tsrain: "tsrain",
};

export const mapWeatherByResponse = {
  clear: "Clear",
  pcloudy: "PCloudy",
  mcloudy: "MCloudy",
  cloudy: "Cloudy",
  humid: "Humid",
  lightrain: "LightRain",
  oshower: "OShower",
  ishower: "IShower",
  lightsnow: "LightSnow",
  rain: "Rainy",
  snow: "Snowy",
  rainsnow: "RainSnow",
  ts: "Thunder",
  tsrain: "ThunderRain",
};

export const mapWeatherDetailByResponse = {
  clear: "Total cloud cover less than 20%",
  pcloudy: "Total cloud cover between 20%-60%",
  mcloudy: "Total cloud cover between 60%-80%",
  cloudy: "Total cloud cover over over 80%",
  humid: "Relative humidity over 90% with total cloud cover less than 60%",
  lightrain:
    "Precipitation rate less than 4mm/hr with total cloud cover more than 80%",
  oshower:
    "Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%",
  ishower:
    "Precipitation rate less than 4mm/hr with total cloud cover less than 60%",
  lightsnow: "Precipitation rate less than 4mm/hr",
  rain: "Precipitation rate over 4mm/hr",
  snow: "Precipitation rate over 4mm/hr",
  rainsnow: "Precipitation type to be ice pellets or freezing rain",
  ts: "Lifted Index less than -5 with precipitation rate below 4mm/hr",
  tsrain: "Lifted Index less than -5 with precipitation rate over 4mm/hr",
};

export const WEATHER_TYPES = {
  CLEAR: "clear",
  PCLOUDY: "pcloudy",
  MCLOUDY: "mcloudy",
  CLOUDY: "cloudy",
  HUMID: "humid",
  RAIN: "rain",
  LIGHTRAIN: "lightrain",
  SNOW: "snow",
  TS: "ts",
  TSRAIN: "tsrain",
  OSHOWER: "oshower",
  ISHOWER: "ishower",
  LIGHTSNOW: "lightsnow",
  RAINSNOW: "rainsnow",
} as const;
export type WEATHER_TYPES = (typeof WEATHER_TYPES)[keyof typeof WEATHER_TYPES];

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
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
};
