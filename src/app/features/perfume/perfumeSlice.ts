import { createSlice } from '@reduxjs/toolkit'
import { store } from '../../store'

const initialState: {
    items: Array<{
        id: number,
        name: string,
        felan: number
    }>
} = {
    items: [
        { id: 1, name: 'Rose', felan: 11 },
        { id: 2, name: 'Orkade', felan: 11 },
        { id: 3, name: 'Sky', felan: 11 },
    ]
}

export const perfumeSlice = createSlice({
    name: 'perfume',
    initialState,
    reducers: {
        getAllPerfumes: (state) => state,
        addPerfume: (state, action) => {
            action.payload
        }
    },

})

export const { getAllPerfumes } = perfumeSlice.actions

export const selectAllPerfumes = (state: ReturnType<typeof store.getState>): typeof initialState => state.perfume

export default perfumeSlice.reducer;