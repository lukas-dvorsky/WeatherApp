import type { WeatherData, WeatherSectionProps } from "../../utils/types";

// Get local time (hh:mm)
function getTime(time: number) {
    const converted = new Date(time * 1000)
    return `${converted.getHours()}:${converted.getMinutes()}`
}

// Create data for weather sections
export function createWeatherSections(data: WeatherData): WeatherSectionProps[] {
    return [
        {
            title: "Temperature",
            items: [
                { desc: "Temp", value: data.main.temp, unit: "°" },
                { desc: "Feels like", value: data.main.feels_like, unit: "°" },
                { desc: "Min", value: data.main.temp_min, unit: "°" },
                { desc: "Max", value: data.main.temp_max, unit: "°" },
                { desc: "Humidity", value: data.main.humidity, unit: "%" },
                { desc: "Visibility", value: data.visibility/1000, unit: 'km' },
            ],
        },
        {
            title: "Wind",
            items: [
                { desc: "Speed", value: data.wind.speed, unit: "m/s" },
                { desc: "Gust", value: data.wind.gust, unit: "m/s" },
                { desc: "Direction", value: data.wind.deg, unit: "°" },
            ],
        },
        {
            title: "Pressure",
            items: [
                { desc: "Pressure", value: data.main.pressure, unit: "hPa" },
                { desc: "Sea", value: data.main.sea_level, unit: "hPa" },
                { desc: "Ground", value: data.main.grnd_level, unit: "hPa" },
            ],
        },
        {
            title: "Coordinations",
            items: [
                { desc: "Lat", value: data.coord.lat },
                { desc: "Lon", value: data.coord.lon },
            ],
        },
        {
            title: "Sun",
            items: [
                { desc: "Sunrise", value: getTime(data.sys.sunrise) },
                { desc: "Sunset", value: getTime(data.sys.sunset) },
            ],
        }
    ];
}
    