import type { WeatherData, WeatherSectionProps } from "../../utils/types";

// Get local time (hh:mm)
function getTime(time: number) {
    const converted = new Date(time * 1000)
    return converted.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Create data for weather sections
export function createWeatherSections(data: WeatherData, index: number): WeatherSectionProps[] {
    return [
        {
            title: "Temperature",
            items: [
                { desc: "Temp", value: data.list[index].main.temp, unit: "°" },
                { desc: "Feels like", value: data.list[index].main.feels_like, unit: "°" },
                { desc: "Min", value: data.list[index].main.temp_min, unit: "°" },
                { desc: "Max", value: data.list[index].main.temp_max, unit: "°" },
                { desc: "Humidity", value: data.list[index].main.humidity, unit: "%" },
                { desc: "Visibility", value: data.list[index].visibility/1000, unit: 'km' },
            ],
        },
        {
            title: "Wind",
            items: [
                { desc: "Speed", value: data.list[index].wind.speed, unit: "m/s" },
                { desc: "Gust", value: data.list[index].wind.gust, unit: "m/s" },
                { desc: "Direction", value: data.list[index].wind.deg, unit: "°" },
            ],
        },
        {
            title: "Pressure",
            items: [
                { desc: "Pressure", value: data.list[index].main.pressure, unit: "hPa" },
                { desc: "Sea", value: data.list[index].main.sea_level, unit: "hPa" },
                { desc: "Ground", value: data.list[index].main.grnd_level, unit: "hPa" },
            ],
        },
        {
            title: "Coordinations",
            items: [
                { desc: "Lat", value: data.city.coord.lat },
                { desc: "Lon", value: data.city.coord.lon },
            ],
        },
        {
            title: "Sun",
            items: [
                { desc: "Sunrise", value: getTime(data.city.sunrise) },
                { desc: "Sunset", value: getTime(data.city.sunset) },
            ],
        }
    ];
}
    