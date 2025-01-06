import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { addTodo } from '../redux/slices/todoSlice'

const TodoCreate = () => {
	const [inputContent, setInputContent] = useState<string>('');
	const dispatch = useDispatch();
	
	const handleTodo = () => {
		if(inputContent.trim().length === 0){
			alert("Lutfen todo alanini doldurunuz!")
			return
		}
			const payload:TodoType = {
				id: Math.floor(Math.random() * 89763),
				content: inputContent
			}
			dispatch(addTodo(payload));
			setInputContent('');
		}
	
  return (
    <div className="todo-create">
        <input value={inputContent} 
               type="text" 
               placeholder="todo ekle" 
               onChange={ (e) => setInputContent(e.target.value)}
               />  
        <button onClick={handleTodo} >Todo Ekle</button>
    </div>
 )
}

export default TodoCreate