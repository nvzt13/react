import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ListTodo = () => {
  return (
    <div className="list-todo">
        <div>
            Bu eklenecek olan bir tododur.
        </div>
        <div className="icons">
            <MdDelete className="icon" />
            <FaEdit className="icon" />
        </div>
    </div>
  )
}

export default ListTodo