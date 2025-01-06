import React from 'react'
import { useSelector } from 'react-redux';
import Todo from "./Todo";
import {useEffect} from 'react';

const ListTodo = () => {
	const { todos } = useSelector((store) => store.todo)
	
  return (
    <div>
        {
			todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))
        }
    </div>
  )
}

export default ListTodo