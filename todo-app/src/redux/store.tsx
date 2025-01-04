import { configureStore } from '@reduxjs/toolkit'
import createTodoReducer from './slices/createtodoSlice'

export const store = configureStore({
  reducer: {
    createTodo: createTodoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch