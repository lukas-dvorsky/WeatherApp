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
    humidity: number
    pressure: number
    sea_level: number
    temp: number
    temp_kf: number
    temp_max: number
    temp_min: number
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

export interface WeatherDataCity {
    coord: Coords
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
}

export interface WeatherDataList {
    clouds: { all: number }
    dt: number
    dt_txt: string
    main: WeatherDataMain
    pop: number
    rain: { "3h": number }
    sys: { pod: string }
    visibility: number
    weather: WeatherDataWeather[]
    wind: WeatherDataWind
}

export interface WeatherData {
    city: WeatherDataCity
    cnt: number
    cod: string
    list: WeatherDataList[]
}

export interface WeatherItem {
    desc: string,
    value: number | string,
    unit?: string
    icon?: string
}

export interface WeatherSectionProps {
    title?: string,
    items: WeatherItem[],
    style?: string
}