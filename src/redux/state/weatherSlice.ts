import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WeatherData } from "../../utils/types";


interface WeatherState {
    setSelectedCityWeather: WeatherData | null;
}

const initialState: WeatherState = {
    setSelectedCityWeather: null
}

const weatherSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
       setSelectedCityWeather(state, action: PayloadAction<WeatherData>) {
        state.setSelectedCityWeather = action.payload
       } 
    }
})

export const { setSelectedCityWeather } = weatherSlice.actions;
export default weatherSlice.reducer;