import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StarWarsState {
    id: number,
    name: string
}

const initialState: StarWarsState = {
    id: 1,
    name: 'no name'
}

export const id = createSlice({
  name: 'id',
  initialState,
  reducers: {
    inc: (state) => {
        state.id = state.id < 15 ? state.id + 1 : 15;
    },
    dec: (state) => {
        state.id = state.id > 1 ? state.id - 1 : 1;
    },
    set: (state, action: PayloadAction<number>) => {
        state.id = action.payload
    },
    name: (state, action: PayloadAction<string>) => {
        state.name = action.payload
    },
  },
})

export const { inc, dec, set } = id.actions

export default id.reducer