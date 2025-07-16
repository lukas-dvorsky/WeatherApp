import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WeatherData } from "../../utils/types";


interface WeatherState {
    setSelectedCityWeather: WeatherData | null;
    setSelectedListIndex: number
    setAnchorListIndex: number
}

const initialState: WeatherState = {
    setSelectedCityWeather: null,
    setSelectedListIndex: 0,
    setAnchorListIndex: 0
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
       },
       setAnchorListIndex(state, action: PayloadAction<number>) {
        state.setAnchorListIndex = action.payload
       }
    }
})

export const { setSelectedCityWeather, setSelectedListIndex, setAnchorListIndex } = weatherSlice.actions;
export default weatherSlice.reducer;