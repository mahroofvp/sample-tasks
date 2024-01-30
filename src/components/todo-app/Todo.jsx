import './todo.scss'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { useRef, useState } from 'react';


const Todo = ()=>{
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [editTodo, setEditTodo] = useState('')
    const [index, setIndex] = useState(0)
    const inputRef = useRef(null)

    const handleChange =(e)=>{
        setTodo(e.target.value)
       
        
    }

    const handleClick = (e)=>{

        if(editTodo){
           todos.splice(index,1,todo)
           console.log(index);
           setEditTodo('')
           setTodo('')
           
         return  setTodos([...todos])

        }

        if(todo){

            setTodos([...todos, todo])
            
        }
        setTodo('')
        inputRef.current.focus()
       
       
    }

    const onDelete =(index)=>{
        const newTodo = todos.filter((item)=>item !== todos[index])
        setTodos(newTodo)
        
    }


    const onEdit =(val)=>{
       setTodo(val)
       setEditTodo(val)
       inputRef.current.focus()
       const indexNo = todos.indexOf(val)  
       setIndex(indexNo)    
    }

   
   

    return(
        <div className="todo-main-div">
            <div className="todo-container-div">
                
                <div className="todo-input-div">
                <input onChange={handleChange} value={todo} ref={inputRef} />
                <button className='todo-add-btn' onClick={handleClick}>Add</button>
                </div>
                <div className="todo-list-div">
                    <ul>
                        {todos.map((val,index)=>{
                            
                            return(
                                <li key={index}>{val}
                             <div className=''>
                             <RiDeleteBin5Fill  className='dust-bin' onClick={()=>onDelete(index)} /> <FaPencilAlt className='pencil' onClick={()=>onEdit(val)} />
                              </div> 
                                 </li>
                                )
                        })}
                       

                    </ul>
                </div>

            </div>
        </div>
    )
}


export default Todo