import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CityCoords {
    lon: number,
    lat: number,
}

interface City {
    id: number,
    name: string,
    state: string,
    country: string,
    coord: CityCoords,
}

interface CityState {
    selectedCity: City | null;
}

const initialState: CityState = {
    selectedCity: null
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
       setSelectedCity(state, action: PayloadAction<City>) {
        state.selectedCity = action.payload
       } 
    }
})

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;