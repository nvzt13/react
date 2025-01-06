import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType} from '../../types/Types'


const initialState: TodoInitialState = {
	todos : [],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
	addTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
		state.todos = [...state.todos, action.payload]
		console.log(state.todos)
	},
	removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) =>{
		state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)]
	},
	editedTodoToState: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
		state.todos = [...state.todos.map((todo) =>  todo.id !== action.payload.id ? todo: action.payload)]
	}
  }
})

export const { addTodo, removeTodoById, editedTodoToState} = todoSlice.actions

export default todoSlice.reducer