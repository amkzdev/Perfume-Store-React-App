import { configureStore } from '@reduxjs/toolkit'
import perfumeReducer from './features/perfume/perfumeSlice'
export const store = configureStore({
    reducer: {
        perfume: perfumeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch