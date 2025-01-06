import {React, useState, useRef, useEffect} from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TodoType } from '../types/Types'
import {useDispatch} from 'react-redux'
import { removeTodoById, editedTodoToState } from '../redux/slices/todoSlice'
import { FaCheck } from "react-icons/fa";
import ReactDOM from "react-dom/client";



 
interface TodoProps {
	todo: TodoType,
}

const Todo = ({todo}: TodoProps) => {
  const inputElement = useRef();
	const {id, content} = todo
	const dispatch = useDispatch();
   const [editable, setEditTable] = useState<boolean>(false);
   const [editedTodo, setEditedTodo] = useState<string>(content)
   
   useEffect(() => {
      if(editable){
	inputElement.current.focus();
	
      }
   }, [editable])
   
   
   const editTodo = () => {
	const payload = {
		id,
		content: editedTodo
	}
	dispatch(editedTodoToState(payload))
	setEditTable(false)
   }
	
  return (
    <div className="list-todo">
      <div className="todo-content">
			{
				editable ? <input ref={inputElement} className="edit-todo" type="text" onChange={(e) => setEditedTodo(e.target.value)}
				     value={editedTodo}
				     />: <div>{content}</div>
			}
        </div>
        <div className="icons">
            <MdDelete className="icon" onClick={ () => dispatch(removeTodoById(id)) } />
            {
	editable ? <FaCheck className="icon" onClick={ editTodo}/> :
            <FaEdit className="icon" onClick={() => setEditTable(true)} />
            }
            
        </div>
    </div>
  );
};

export default Todo;