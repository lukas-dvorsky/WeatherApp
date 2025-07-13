import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { City } from "../../utils/types";


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