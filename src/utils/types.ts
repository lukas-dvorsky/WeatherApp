// City Types
export interface Coords {
    lon: number,
    lat: number,
}

export interface City {
    id: number | string,
    name: string,
    state: string,
    country: string,
    coord: Coords,
}

// WeatherApp Types
export interface WeatherDataMain {
    feels_like: number
    grnd_level: number
    huminidy: number
    pressure: number
    sea_level: number
    temp: number
    temp_max: number
    temp_min: number
}

export interface WeatherDataSys {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
}

export interface WeatherDataWeather {
    description: string,
    icon: string
    id: number
    main: string
}

export interface WeatherDataWind {
    deg: number
    gust: number
    speed: number
}

export interface WeatherData {
    base: string,
    clouds: { all: number }
    cod: number
    coord: Coords
    dt: number
    id: number
    main: WeatherDataMain
    name: string
    sys: WeatherDataSys
    timezone: number
    visibility: number
    weather: WeatherDataWeather[]
    length: number
    wind: WeatherDataWind
}