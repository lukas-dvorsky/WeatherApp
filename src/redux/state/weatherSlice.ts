import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WeatherData } from "../../utils/types";


interface WeatherState {
    setSelectedCityWeather: WeatherData | null;
    setSelectedListIndex: number
}

const initialState: WeatherState = {
    setSelectedCityWeather: null,
    setSelectedListIndex: 0
}

const weatherSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
       setSelectedCityWeather(state, action: PayloadAction<WeatherData>) {
        state.setSelectedCityWeather = action.payload
       },
       setSelectedListIndex(state, action: PayloadAction<number>) {
        state.setSelectedListIndex = action.payload
       }

    }
})

export const { setSelectedCityWeather, setSelectedListIndex } = weatherSlice.actions;
export default weatherSlice.reducer;