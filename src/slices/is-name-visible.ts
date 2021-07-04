import { createSlice } from '@reduxjs/toolkit'

interface StarWarsState {
    isNameVisible: boolean
}

const initialState: StarWarsState = {
    isNameVisible: true
}

export const isNameVisible = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    show: (state) => {
        state.isNameVisible = true;
    },
    hide: (state) => {
        state.isNameVisible = false;
    },
    toggle: (state) => {
        state.isNameVisible = !state.isNameVisible;
    }
  },
})

export const { show, hide, toggle } = isNameVisible.actions

export default isNameVisible.reducer